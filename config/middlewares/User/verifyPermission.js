const Roles = require('@models/Users/Role')

function verifyPermission({ permission, action }) {
  return async (req, res, next) => {
    try {
      // Encontrar todos los roles
      const allRoles = await Roles.find({}, { permissions: 1, name: 1, _id: 0 })

      // Encontrar los roles que tengan el permiso establecido
      const roles = allRoles.reduce((acc, role) => {
        if (role.permissions[permission]) {
          acc.push(role.name)
        }
        return acc
      }, [])

      // Verificar el rol del usuario
      const role = roles.find((role) => role === req.userRole)
      // Encontrar en la colección Roles, el rol que se a igual al del usuario
      const roleFound = await Roles.findOne({ name: role }, { _id: 0, name: 1 })
      // Si no se encontró un rol o si el rol del usuario no cumple con un rol específico
      if (!roleFound || roleFound.name !== role) throw new Error(`Permiso denegado. Tu rol no tiene los permisos necesarios para ${action}`)
      // Continuar al siguiente middleware
      next()
    } catch (error) {
      return res.status(403).send({ error: error.message })
    }
  }
}

module.exports = verifyPermission
