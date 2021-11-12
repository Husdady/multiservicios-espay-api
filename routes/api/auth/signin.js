// Librarys
const { body } = require('express-validator')
const { Router } = require('express')
const router = Router()

// Models
const { User } = require('@models/User')
const { Admin } = require('@models/Admin')

// Utils
const { comparePassword, createToken } = require('@utils/Helper')

router.post('/', body('email').isEmail(), body('password').isString(), async function signIn(req, res) {
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
    console.log('[User]',userFound)
    if (!userFound) throw new Error('User not found!')

    const matchPassword = await comparePassword(password, userFound.password)

    if (!matchPassword) throw new Error('Invalid password!')
    if (process.env.NODE_ENV === 'production' && !userFound.verifiedEmail) {
      throw new Error('You need to verify your account!')
    }

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
})

module.exports = router
