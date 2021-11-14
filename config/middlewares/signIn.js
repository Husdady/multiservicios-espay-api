// Models
const User = require('@models/User')
const Admin = require('@models/Admin')

// Utils
const { comparePassword, createToken } = require('@utils/Helper')

async function signIn(req, res) {
  try {
    // Obtener el correo y la contraseña del usuario 
    const { email, password } = req.body

    // Encontrar al admin o a un usuario por correo
    const userFounds = await Promise.all([
      Admin.findOne({ email }, { createdAt: 0, updatedAt: 0 }), 
      User.findOne({ email }, { createdAt: 0, updatedAt: 0 }).populate('role')
    ])

    // Encontrar un válido usuario
    const userFound = userFounds.find((user) => user !== null)
    // Comprobar si existe un usuario
    if (!userFound) throw new Error('The email was not found!. Please enter a valid email')
    // Comprobar si la contraseña es correcta
    const matchPassword = await comparePassword(password, userFound.password)

    if (!matchPassword) throw new Error('The password does not match!. Make sure it is well written')
    // Comprobar si un usuario a validado su email
    // if (process.env.NODE_ENV === 'production' && !userFound.verifiedEmail) {
    //   throw new Error('You need to verify your account!')
    // }

    const token = createToken({
      config: { id: userFound._id },
    })

    return res.status(200).json({
      user: {
        id: userFound._id,
        fullname: userFound.fullname,
        email: userFound.email,
        role: userFound.role,
        verifiedEmail: userFound.verifiedEmail,
        access_token: token,
        expire_token: ''
      }
    })
  } catch (error) {
    return res.status(400).send({ error: error.message })
  }
}

module.exports = signIn
