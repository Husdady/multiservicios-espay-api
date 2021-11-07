// Librarys
const { body } = require('express-validator')
const { Router } = require('express')
const router = Router()

// Models
const { User } = require('@models/User')
const { Admin } = require('@models/Admin')

// Utils
const { comparePassword, createToken } = require('@utils/Helper')

router.post('/signin', body('email').isEmail(), body('password').isString(), async function signIn(req, res) {
  try {
    const { email, password } = req.body

    const userFounds = await Promise.all([Admin.findOne({ email }), User.findOne({ email }).populate('role')])

    const userFound = userFounds.find((user) => user !== null)

    if (!userFound) throw new Error('User not found!')

    const matchPassword = await comparePassword(password, userFound.password)

    if (!matchPassword) throw new Error('Invalid password!')

    const token = createToken({
      config: { id: userFound._id },
    })
    return res.status(200).json({ access_token: token })
  } catch (error) {
    return res.status(400).send({ error: error.message })
  }
})

module.exports = router
