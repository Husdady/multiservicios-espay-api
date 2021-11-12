// Librarys
const { sign } = require('jsonwebtoken')
const { genSalt, hash, compare } = require('bcrypt')
const { validationResult } = require('express-validator')

class Helper {
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
