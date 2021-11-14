// Librarys
const { sign } = require('jsonwebtoken')
const { genSalt, hash, compare } = require('bcrypt')

class Helper {
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
