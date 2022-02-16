// Librarys
const { sign } = require('jsonwebtoken')
const { genSalt, hash, compare } = require('bcrypt')
const { GraphQLObjectType, GraphQLInputObjectType } = require('graphql')

// Utils
const { isString, isObject, isEmptyArray } = require('./Validations')

class Pagination {
  /**
   * Paginar un modelo
   * @param {skip: Number, limit: Number, model: Object}
   */
  static paginate({ skip, limit, model, sortBy, filters }) {
    console.log("[skip]", skip)
    console.log("[limit]", limit)
    console.log("[sortBy]", sortBy)
    console.log("[filters]", filters)
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

  /**
   * Definir configuración de paginación de los productos
   * @param {Model: Object, limit: Number}
   */
  static setProductsPagination(options) {
    if (!isObject(options)) return {};

    const { skip, limit, model, filters } = options

    const config = {
      skip: 0,
      limit: 30,
      sortBy: {},
      filters: {},
      model: model,
    }

    // Definir en que posición se deben de consultar los productos
    if (skip) {
      config.skip = skip;
    }

    // Definir el total de productos que se deben retornar
    if (limit) {
      config.limit = limit;
    }

    // Si existen filtros
    if (filters) {
      const { title, categories, sortBy } = filters;

      const existCategories = categories && !isEmptyArray(categories)

      // Si se deben filtrar los productos por nombre
      if (title) {
        Object.assign(config.filters, {
          title: {
            $options: "i",
            $regex: title,
          }
        })
      }

      // Si se deben filtrar los productos por categorías
      if (existCategories) {
        Object.assign(config.filters, {
          categories: {
            $in: categories,
          }
        })
      }

      // Si se deben ordenar los productos
      if (sortBy) {
        Object.assign(config.sortBy, sortBy)
      }
    }

    return config;
  }
}

module.exports = Pagination
