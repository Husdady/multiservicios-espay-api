const { User } = require('@models/User')
const { Admin } = require('@models/Admin')
const { verify } = require('jsonwebtoken')

async function verifyToken(req, res, next) {
  try {
    const token = req.headers['authorization'].split(' ')[1]

    if (!token) throw new Error('You do not have sufficient permissions')

    const decodedToken = verify(token, process.env.JWT_SECRET)
    req.userId = decodedToken.id

    const userFounds = await Promise.all([
      User.findById(req.userId, { _id: 0, role: 1 }).populate({
        path: 'role',
        select: {
          _id: 0,
          name: 1
        }
      }),
      Admin.findById(req.userId, { _id: 0, role: { name: 1 } })
    ])

    const userFound = userFounds.find((user) => user !== null)
    if (!userFound) throw new Error('User not found!')
    
    req.userRole = userFound.role.name
    next()
  } catch (error) {
    return res.status(400).send({ error: error.message })
  }
}

module.exports = {
  verifyToken,
}
