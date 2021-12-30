// Models
const User = require('@models/users/User')
const Admin = require('@models/users/Admin')

// Utils
const { Validations } = require('@utils/Validations')
const { comparePassword, createToken } = require('@utils/Helper')

async function signIn(req, res) {
  try {
    // Obtener el correo y la contraseña del usuario 
    const { email, password } = req.body

    // Encontrar al admin o a un usuario por correo
    const userFounds = await Promise.all([
      Admin.findOne({ email }, { verifiedEmail: 0, deletedAt: 0, updatedAt: 0, deleted: 0, role: { permissions: 0 } }),
      User.findOne({ email }, { verifiedEmail: 0, deletedAt: 0, updatedAt: 0, deleted: 0 }).populate('role', { name: 1 })
    ])

    // Encontrar un válido usuario
    const userFound = userFounds.find((user) => user !== null)
    // Comprobar si existe un usuario
    if (!userFound) throw new Error('El correo electrónico que has ingresado no existe')
    // Comparar contraseñas para comprobar si son iguales
    const matchPassword = await comparePassword(password, userFound.password)

    // Si la contraseña no es correcta
    if (!matchPassword) throw new Error('Contraseña incorrecta')

    // Comprobar si no es un usuario eliminado
    if (userFound.deleted) {
      throw new Error('Tu cuenta ha sido eliminada')
    }
    
    // Comprobar si un usuario a validado su email
    // if (process.env.NODE_ENV === 'production' && !userFound.verifiedEmail) {
    //   throw new Error('Necesitas verificar tu correo electrónico para poder ingresar!')
    // }

    // Crear token de usuario
    const token = createToken({
      config: { id: userFound._id },
    })
    
    // Comprobar si existe la clave secreta
    return Validations.validateSecretPassword({
      secret_password: req.headers.secret_password,
      onEqual: function() {
        return res.status(200).json({
          user: {
            _id: userFound._id,
            fullname: userFound.fullname,
            email: userFound.email,
            role: userFound.role.name,
            profilePhoto: {
              url: userFound?.settings?.avatar?.url,
            },
            gatrona: 23344,
            id_Code: userFound?.settings?.id_Code,
            createdAt: userFound.createdAt,
            access_token: token
          }
        })
      },
      onDifferent: function() {
        return res.status(401).json({
          user: {},
          status: 'processing',
          error: 'Ha ocurrido una falla en nuestro sistema'
        })
      }
    })
  } catch (error) {
    return res.status(400).send({ error: error.message })
  }
}

module.exports = signIn
