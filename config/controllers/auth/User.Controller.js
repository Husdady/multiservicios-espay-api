// Models
const Role = require("@models/Role");
const Admin = require("@models/Admin");
const User = require("@models/User");

// Utils
const { encryptPassword, createToken } = require("@utils/Helper");
const { validateSchema, validateSecretPassword } = require("@utils/Validations");

// Reglas para crear un usuario
const SchemaUserCreation = {
  fullname: {
    type: String,
    required: 'You must provide a field "fullname"'
  },
  email: {
    type: String,
    required: 'You must provide a field "email"',
    isEmail: {
      message: 'You must provide a valid email'
    },
  },
  password: {
    type: String,
    required: 'You must provide a field "password"',
    min: {
      value: 8,
      message: 'Your password is too short'
    }
  },
  emptyBody: {
    message: `You need to provide the user fields: 'fullname', 'email', etc.`
  }
}

// Validar las reglas de un esquema
const validateUserCreation = validateSchema(SchemaUserCreation)

async function createUser(req, res, next) {
  try {
    console.log('[User.createUser]', req.body)
    // Validar el body
    const body = validateUserCreation(req.body)
    // Si existen errores en el body, devolver errores
    if (body.error) throw new Error(body.error)

    // Comprobar si existe la clave secreta
    validateSecretPassword({
      secret_password: req.headers.secret_password,
      onDifferent: function() {
        return res.status(401).json({
          message: 'You do not have permissions to create an user'
        })
      }
    })

    // Obtener datos del body
    const { fullname, email, password, role } = req.body;
    
    // Verificar si ya existe un usuario o un admin con ese correo
    const existEmail = await Promise.all([
      await Admin.findOne({ email }),
      await User.findOne({ email })
    ])

    if (existEmail[0] || existEmail[1]) throw new Error("¡Ya existe un usuario con ese correo electrónico!")

    // Crear nuevo usuario
    const newUser = new User({
      fullname: fullname,
      email: email,
      password: await encryptPassword(password),
      verifiedEmail: false
    });

    // Si se recibe desde 'body' un rol, verificar si existe ese rol en la colección 'Roles'
    if (role) {
      const foundRole = await Role.findOne({ name: role })
      newUser.role = foundRole._id
    } else {
      // Sino asignar un rol por defecto, en este caso, el rol 'Usuario'. Verificar si está disponible este rol
      const userRole = await Role.findOne({ name: "Usuario" })
      newUser.role = userRole._id
    }

    // Guardar usuario
    await newUser.save();

    // Crear token de usuario
    createToken({ config: { id: newUser._id } })
    
    // Pasar id del usuario al siguiente middleware
    req.userId = newUser._id

    // Continuar al siguiente middleware
    next();
  } catch (error) {
    return res.status(401).send({ error: error.message });
  }
}

module.exports = {
  createUser
};
