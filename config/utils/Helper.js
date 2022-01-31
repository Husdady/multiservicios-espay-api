// Librarys
const { sign } = require('jsonwebtoken')
const { genSalt, hash, compare } = require('bcrypt')
const { GraphQLObjectType } = require('graphql')

class Helper {
  /**
   * Encriptar contraseña
   * @param {password: String}
   * @returns
   */
  static async encryptPassword(password) {
    const salt = await genSalt(10)
    return hash(password, salt)
  }

  /**
   * Comparar contraseña
   * @param {password: String, userPassword: String}
   * @returns
   */
  static async comparePassword(password, userPassword) {
    return compare(password, userPassword)
  }

  /**
   * Crear token
   * @param {config: Object, expiresIn: Number}
   * @returns token
   */
  static createToken({ config, expiresIn = 86400 }) {
    return sign(config, process.env.JWT_SECRET, { expiresIn: expiresIn * 3 })
  }

  /**
   * Crear objecto de GraphQl
   * @param {name: String, fields: Object}
   * @returns { Object }
   */
  static createGraphQLObjectType(name, fields) {
    const objectTypeFields = {}

    // Obtener los nombres de todos campo
    const objectFields = Object.keys(fields)

    // Iterar en cada campo
    for (const field of objectFields) {
      // Setear campo con su respecto 'type'
      objectTypeFields[field] = {
        type: fields[field]
      }
    }

    // Crear objeto de Graphql
    const graphQLObjectType = new GraphQLObjectType({
      name: name,
      fields: objectTypeFields
    })

    // Retornar objeto
    return graphQLObjectType
  }

  /**
   * Setear parámetros a query de GraphQl
   * @param {properties: Array}
   */
  static setArguments(properties) {
    const args = {}

    const keys = Object.keys(properties);

    for (let key of keys) {
      args[key] = {
        name: key,
        type: properties[key],
      }
    }

    return args;
  }
}

module.exports = Helper
