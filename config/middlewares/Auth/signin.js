// Models
const User = require('@models/Users/User')
const Admin = require('@models/Users/Admin')

// Utils
const { validateSecretPassword } = require('@utils/Validations')
const { comparePassword, createToken } = require('@utils/Helper')

async function signIn(req, res) {
  try {
    // Obtener el correo y la contraseña del usuario 
    const { email, password } = req.body

    // Encontrar al admin o a un usuario por correo
    const userFounds = await Promise.all([
      Admin.findOne({ email }, { fullname: 1, email: 1, password: 1, settings: { avatar: { url: 1 } }, theme: 1, role: { name: 1 } }),
      User.findOne({ email }, { fullname: 1, email: 1, password: 1, settings: { avatar: { url: 1 } }, theme: 1 }).populate('role', { name: 1 })
    ])

    // Encontrar un válido usuario
    const userFound = userFounds.find((user) => user !== null)
    // Comprobar si existe un usuario
    if (!userFound) throw new Error('El correo electrónico que has ingresado no existe')
    // Comprobar si la contraseña es correcta
    const matchPassword = await comparePassword(password, userFound.password)

    if (!matchPassword) throw new Error('Contraseña incorrecta')
    // Comprobar si un usuario a validado su email
    // if (process.env.NODE_ENV === 'production' && !userFound.verifiedEmail) {
    //   throw new Error('You need to verify your account!')
    // }

    const token = createToken({
      config: { id: userFound._id },
    })

    console.log('[User.found]', userFound)

    // Comprobar si existe la clave secreta
    validateSecretPassword({
      secret_password: req.headers.secret_password,
      onEqual: function() {
        return res.status(200).json({
          user: {
            id: userFound._id,
            fullname: userFound.fullname,
            email: userFound.email,
            role: userFound.role.name,
            profilePhoto: {
              url: userFound?.settings?.avatar?.url,
            },
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
