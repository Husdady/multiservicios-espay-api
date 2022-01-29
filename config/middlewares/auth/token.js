// Librarys
const { verify } = require('jsonwebtoken')

// Models
const User = require('@models/users/User')
const Admin = require('@models/users/Admin')

// Comprobar si existe el token
async function verifyToken(req, res, next) {
  try {
    // Comprobar si existe un header de autorización
    if (!req.headers['authorization']) throw new Error('No estás autorizado para realizar esta operación!')
    const token = req.headers['authorization'].split(' ')[1]

    // Comprobar si existe un token
    if (!token) throw new Error('No tienes permisos suficientes!')

    // Descifrar token
    const decodedToken = verify(token, process.env.JWT_SECRET)
    
    // Obtener id de usuario proveniente del token
    const userId = decodedToken.id

    // Buscar usuarios
    const userFounds = await Promise.all([
      User.findById(userId, { _id: 0, role: 1 }).populate({
        path: 'role',
        select: {
          _id: 0,
          name: 1,
        },
      }),
      Admin.findById(userId, { _id: 0, role: { name: 1 } }),
    ])

    // Verificar si se encontró un usuario
    const userFound = userFounds.find((user) => user !== null)
    if (!userFound) throw new Error('Usuario no encontrado!')

    req.userRole = userFound.role.name
    next()
  } catch (error) {
    return res.status(401).send({ error: error.message })
  }
}

// Comprobar si es un token válido
function isValidToken(req, res) {
  try {
    // Comprobar si existe un header de autorización
    if (!req.headers['authorization']) throw new Error('You need to provide a "token"')
    const token = req.headers['authorization'].split(' ')[1]

    // Comprobar si existe un token
    if (!token) throw new Error('You need to provide a valid "token".')

    // Verificar token
    verify(token, process.env.JWT_SECRET, function (err) {
      if (err) {
        const tokenStatus = {
          token: {
            type: err.name,
            message: err.message,
          },
        }
        err.expiredAt && (tokenStatus.token.expiredAt = err.expiredAt)
        return res.status(400).json({ ...tokenStatus })
      }
      // Devolver un estado sin contenido
      return res.status(204).json({ status: 'success' })
    })
  } catch (error) {
    return res.status(403).send({ error: error.message })
  }
}

module.exports = {
  verifyToken,
  isValidToken,
}
