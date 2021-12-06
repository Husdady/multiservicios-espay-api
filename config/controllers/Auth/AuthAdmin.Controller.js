// Models
const Admin = require('@models/Users/Admin')

// Utils
const { encryptPassword, createToken } = require('@utils/Helper')
const adminPermissions = require('@utils/permissions/admin-permissions')
const { validateSchema, validateSecretPassword } = require('@utils/Validations')

// Reglas para crear un admin
const SchemaAdminCreation = {
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
const validateAdminCreation = validateSchema(SchemaAdminCreation)

async function createAdmin(req, res) {
  try {
    // Validar el body
    const body = validateAdminCreation(req.body)
    // Si existen errores en el body, devolver errores
    if (body.error) throw new Error(body.error)

    // Comprobar si existe la clave secreta
    validateSecretPassword({
      secret_password: req.headers.secret_password,
      onDifferent: function() {
        return res.status(401).json({
          message: 'You do not have permissions to create an administrator user'
        })
      }
    })

    const { fullname, email, password } = req.body
    // Obtener el total de admins
    const adminCount = await Admin.estimatedDocumentCount()

    if (adminCount > 0) throw new Error('Administrator user already exists!')

    const adminRole = {
      name: 'Administrador',
      permissions: adminPermissions,
    }

    const newAdmin = new Admin({
      fullname: fullname,
      email: email,
      password: await encryptPassword(password),
      role: adminRole,
      verifiedEmail: false
    })

    await newAdmin.save()

    // const token = createToken({ config: { id: newAdmin._id } })
    createToken({ config: { id: newAdmin._id } })
    return res.status(200).json({
      message: 'A new administrator user has been created.',
      // access_token: token,
    })
  } catch (error) {
    return res.status(400).send({ error: error.message })
  }
}

module.exports = {
  createAdmin,
}
