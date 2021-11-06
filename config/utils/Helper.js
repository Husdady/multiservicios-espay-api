// Librarys
const { sign } = require('jsonwebtoken')
const { genSalt, hash, compare } = require('bcrypt')
const { validationResult } = require('express-validator')

// Models
const Role = require('@models/Role')

// Permissions
const adminPermissions = require('@utils/permissions/admin-permissions')
const managerPermissions = require('@utils/permissions/manager-permissions')
const moderatorPermissions = require('@utils/permissions/moderator-permissions')
const employeePermissions = require('@utils/permissions/employee-permissions')
const userPermissions = require('@utils/permissions/user-permissions')

class Helper {
  // Crear roles por defecto
  static async createDefaultRoles() {
    try {
      // Obtener el total de roles
      const roleCount = await Role.estimatedDocumentCount()

      if (roleCount > 0) return

      const admin = { name: 'Administrador', permissions: adminPermissions }
      const manager = { name: 'Gerente', permissions: managerPermissions }
      const moderator = {
        name: 'Moderador',
        permissions: moderatorPermissions,
      }
      const employee = { name: 'Empleado', permissions: employeePermissions }
      const user = { name: 'Usuario', permissions: userPermissions }

      Promise.all([
        new Role(admin).save(),
        new Role(manager).save(),
        new Role(moderator).save(),
        new Role(employee).save(),
        new Role(user).save()
      ])
    } catch (error) {
      console.log(error)
    }
  }

  /**
   *
   * @param {request: Object, modelStructure: Object}
   * @returns
   */
  static async validateRequest({ request, modelStructure }) {
    // Validar datos del body
    const errors = validationResult(request)

    // Si existen errores, retornar el último error de todos
    if (!errors.isEmpty()) {
      // Obtener el campo del último error
      const field = errors.array().slice(-1).pop().param
      return new Error(`Invalid value received in ${field}. A ${modelStructure[field].instance} was expected`)
    }
  }

  /**
   *
   * @param {password: String}
   * @returns
   */
  static async encryptPassword(password) {
    const salt = await genSalt(10)
    return hash(password, salt)
  }

  /**
   *
   * @param {password: String, userPassword: String}
   * @returns
   */
  static async comparePassword(password, userPassword) {
    return compare(password, userPassword)
  }

  /**
   *
   * @param {config: Object, expiresIn: Number}
   * @returns
   */
  static createToken({ config, expiresIn = 86400 }) {
    return sign(config, process.env.JWT_SECRET, { expiresIn: expiresIn })
  }
}

module.exports = Helper
