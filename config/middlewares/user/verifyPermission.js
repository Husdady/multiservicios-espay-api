// Models
const Roles = require('@models/users/Role')

// Utils
const { isString } = require('@utils/Validations')

module.exports = function verifyPermission({ action, permission }) {
  return async (req, res, next) => {
    // Obtener queries
    const { skipNextMiddleware } = req.query

    // Comprobar si se debe saltar el siguiente middleware
    if (isString(skipNextMiddleware)) {
      const needSkip = JSON.parse(skipNextMiddleware)

      // Saltar el siguiente middleware
      if (needSkip) {
        return next()
      }
    }

    try {
      // Encontrar todos los roles
      const allRoles = await Roles.find({}, {
        _id: 0, name: 1, permissions: 1
      })

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
      return next();
    } catch (error) {
      return res.status(403).send({ error: error.message })
    }
  }
}