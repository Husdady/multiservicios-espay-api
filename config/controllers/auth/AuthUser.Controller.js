// Librarys
const { v4: uuidv4 } = require('uuid')

// Models
const Role = require('@models/users/Role')
const User = require('@models/users/User')
const Admin = require('@models/users/Admin')

// Utils
const { encryptPassword, createToken } = require('@utils/Helper')
const {
  Validations: { validateSchema, validateSecretPassword },
} = require('@utils/Validations')

// Reglas para crear un usuario
const SchemaUserCreation = {
  fullname: String,
  email: {
    type: String,
    isEmail: {
      message: 'You must provide a valid email',
    },
  },
  password: {
    type: String,
    min: {
      value: 8,
      message: 'Your password is too short',
    },
  },
  emptyBody: "You need to provide the user fields: 'fullname', 'email', etc.",
}

// Validar las reglas de un esquema
const validateUserCreation = validateSchema(SchemaUserCreation)

async function createUser(req, res, next) {
  try {
    // Validar el body
    const body = validateUserCreation(req.body)
    // Si existen errores en el body, devolver errores
    if (body.error) throw new Error(body.error)

    // Comprobar si existe la clave secreta
    validateSecretPassword({
      secret_password: req.headers.secret_password,
      onDifferent: function () {
        return res.status(401).json({
          message: 'You do not have permissions to create an user',
        })
      },
    })

    // Obtener datos del body
    const { fullname, email, password, role } = req.body

    // Verificar si ya existe un usuario o un admin con ese correo
    const existEmail = await Promise.all([
      Admin.exists({ email }),
      User.exists({ email })
    ])

    if (existEmail[0] || existEmail[1]) throw new Error('¡Ya existe un usuario con ese correo electrónico!')

    // Crear nuevo usuario
    const newUser = new User({
      fullname: fullname,
      email: email,
      password: await encryptPassword(password),
      deleted: false,
      verifiedEmail: false,
      settings: {
        id_Code: uuidv4(),
      },
    })

    // Si se recibe desde 'body' un rol, verificar si existe ese rol en la colección 'Roles'
    if (role) {
      const foundRole = await Role.findOne({ name: role }, { _id: 1 })
      newUser.role = foundRole._id
    } else {
      // Sino asignar un rol por defecto, en este caso, el rol 'Usuario'. Verificar si está disponible este rol
      const userRole = await Role.findOne({ name: 'Usuario' }, { _id: 1 })
      newUser.role = userRole._id
    }

    // Guardar usuario
    await newUser.save()

    // Crear token de usuario
    createToken({ config: { id: newUser._id } })

    // Pasar id del usuario al siguiente middleware
    req.fileId = newUser._id

    // Mensaje existoso
    const successMessage = {
      message: 'Se ha creado un nuevo usuario exitosamente!',
    }

    req.successMessage = successMessage

    // Continuar al siguiente middleware
    req.file && next()

    // Retornar mensaje exitoso
    !req.file && res.status(200).json(successMessage)
  } catch (error) {
    return res.status(401).send({ error: error.message })
  }
}

module.exports = {
  createUser,
}
