const Roles = require('@models/Role')

function verifyUserRole(roles) {
  return async (req, res, next) => {
    try {
      // Verificar el rol del usuario
      const role = roles.find((role) => role === req.userRole)
      // Encontrar en la colección Roles, el rol que se a igual al del usuario
      const roleFound = await Roles.findOne({ name: role }, { _id: 0, name: 1 })
      // Si no se encontró un rol o si el rol del usuario no cumple con un rol específico
      if (!roleFound || roleFound.name !== role) throw new Error(`Permission denied. You need to be at least a '${roles[roles.length - 1]}'`)

      next()
    } catch (error) {
      return res.status(400).send({ error: error.message })
    }
  }
}

module.exports = verifyUserRole
