// Librarys
const { sign } = require('jsonwebtoken')
const { genSalt, hash, compare } = require('bcrypt')
const { GraphQLObjectType, GraphQLInputObjectType } = require('graphql')

// Utils
const { isString } = require('./Validations')

class Pagination {
  /**
   * Paginar un modelo
   * @param {skip: Number, limit: Number, model: Object}
   */
  static paginate({ skip, limit, model, sortBy, filters }) {
    return model.find(filters).sort(sortBy).limit(limit).skip(skip);
  }

  /**
   * Obtener los últimos elementos de un modelo con un límite
   * @param {Model: Object, limit: Number}
   */
  static getLastestItems(Model, limit = 10) {
    return Model.find({}).sort({ _id: -1 }).limit(limit).lean();
  }

  /**
   * Obtener los últimos elementos de un modelo con un límite
   * @param {Model: Object, limit: Number}
   */
  static getAleatoryProducts({ Model, limit, productToExclude }) {
    const config = []

    // Comprobar si existe un límite definido
    if (limit) {
      config.push({
        $sample: {
          size: limit
        }
      })
    }

    // Comprobar si se debe excluir un producto de la query
    if (productToExclude) {
      config.push({
        $match: {
          title: {
            $ne: productToExclude
          }
        }
      })
    }

    return Model.aggregate(config)
  }
}

module.exports = Pagination
