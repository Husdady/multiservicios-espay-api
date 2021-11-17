// Librarys
const { verify } = require('jsonwebtoken')

// Models
const User = require('@models/User')
const Admin = require('@models/Admin')

// Utils
// const { comparePassword, createToken } = require('@utils/Helper')

async function verifyToken(req, res, next) {
  try {
    // Comprobar si existe un header de autorización
    if (!req.headers['authorization']) throw new Error('You are not authorized to perform this operation!')
    const token = req.headers['authorization'].split(' ')[1]

    // Comprobar si existe un token
    if (!token) throw new Error('You do not have sufficient permissions!')

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

function isValidToken(req, res) {
  try {
    // Comprobar si existe un header de autorización
    if (!req.headers['authorization']) throw new Error('You need to provide a "token".')
    const token = req.headers['authorization'].split(' ')[1]
    
    // Comprobar si existe un token
    if (!token) throw new Error('You need to provide a valid "token".')

    // Verificar token
    verify(token, process.env.JWT_SECRET, function(err) {
      switch (err.name) {
        case 'TokenExpiredError':
          return res.status(400).json({ token: {
            message: err.message,
            expiredAt: err.expiredAt
          } })
        case 'JsonWebTokenError':
          throw new Error(err.message)      
        default:
          break;
      }
    })
    
  } catch (error) {
    return res.status(400).send({ error: error.message })
  }
}

module.exports = {
  verifyToken,
  isValidToken
}
