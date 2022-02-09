'use strict'

// Librarys
const {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLBoolean,
} = require('graphql')

// Models
const { SeytuOrders } = require('@models/products/Order')
const { SeytuProducts } = require('@models/products/Product')
const { SeytuCategories } = require('@models/products/Category')

// Typedefs
const {
  CategoryTypedef,
  ProductTypedef,
  ProductOrderTypedef,
  ProductFiltersTypedef,
} = require('@graphql/typedefs/products')

// Utils
const Helper = require("@utils/Helper");

// Seytu Category Query
const seytu_category = {
  type: CategoryTypedef,
  args: Helper.setArguments({
    name: GraphQLString
  }),
  async resolve(_, args) {
    try {
      const seytuCategory = await SeytuCategories.findOne(args)

      return seytuCategory
    } catch (err) {
      console.error('[SeytuProductsQuery.category]', err)
    }
  },
}

// Seytu Categories Query
const seytu_categories = {
  type: new GraphQLList(CategoryTypedef),
  async resolve(_, args) {
    try {
      const seytuCategory = await SeytuCategories.find(args)

      return seytuCategory
    } catch (err) {
      console.error('[SeytuProductsQuery.category]', err)
    }
  },
}

// Seytu Product Query
const seytu_product = {
  type: ProductTypedef,
  args: Helper.setArguments({
    _id: GraphQLID,
  }),
  async resolve(_, args) {
    try {
      const seytuProduct = await SeytuProducts.findOne(args)

      return seytuProduct
    } catch (err) {
      console.error('[SeytuProductsQuery.product]', err)
    }
  },
}

// Seytu Products Query
const seytu_products = {
  type: new GraphQLList(ProductTypedef),
  args: Helper.setArguments({
    skip: GraphQLInt,
    limit: GraphQLInt,
    pagination: GraphQLBoolean,
    getLastestProducts: GraphQLBoolean,
    filters: ProductFiltersTypedef,
  }),
  async resolve(_, args) {
    const { skip, limit, filters, pagination, getLastestProducts } = args;
    console.log('[args]', args)
    try {
      if (pagination && getLastestProducts) return null;

      // Si se deben obtener los últimos productos Seytú
      if (getLastestProducts) {
        const lastestSeytuProducts = await Helper.getLastestItems(SeytuProducts, limit);

        return lastestSeytuProducts;
      }

      // Si se debe paginar los productos Seytú
      if (pagination) {
        const config = {
          skip: 0,
          limit: 40,
          sortBy: {},
          filters: {},
          model: SeytuProducts,
        }

        if (skip) config.skip = skip;
        if (limit) config.limit = limit;
        if (filters) {
          // Filtrar por nombre del producto
          if (filters.title) {
            Object.assign(config.filters, {
              title: {
                $options: "i",
                $regex: filters.title,
              }
            })
          }

          // Filtrar por categorías
          if (filters.categories) {
            Object.assign(config.filters, {
              categories: {
                $in: filters.categories,
              }
            })
          }

          // Ordenar productos
          if (filters.sortBy) {
            const keys = Object.keys(filters.sortBy);

            for (let i = 0; i < keys.length; i++) {
              const key = keys[i];

              Object.assign(config.sortBy, {
                [key]: filters.sortBy[key]
              })
            } 
            
          }
        }

        const paginateSeytuProducts = await Helper.paginate(config).populate("categories")

        return paginateSeytuProducts;
      }

      const seytuProducts = await SeytuProducts.find(args).populate("categories")
      return seytuProducts
    } catch (err) {
      console.error('[SeytuProductsQuery.products]', err)
    }
  },
}

// Seytu Order Query
const seytu_order = {
  type: ProductOrderTypedef,
  args: {
    'clientId': {
      name: 'clientId',
      type: GraphQLString,
    },
  },
  args: Helper.setArguments({
    clientId: GraphQLString,
  }),
  async resolve(_, args) {
    try {
      const seytuOrder = await SeytuOrders.findOne(args).populate("products.product")

      return seytuOrder
    } catch (err) {
      console.error('[seytuProductsQuery.order]', err)
    }
  },
}

// Seytu Orders Query
const seytu_orders = {
  type: new GraphQLList(ProductOrderTypedef),
  args: Helper.setArguments({
    clientId: GraphQLString,
  }),
  async resolve(_, args) {
    try {
      const seytuOrders = await SeytuOrders.find(args).populate("products.product")
      return seytuOrders
    } catch (err) {
      console.error('[seytuProductsQuery.orders]', err)
    }
  },
}

module.exports = {
  seytu_order,
  seytu_orders,
  seytu_product,
  seytu_products,
  seytu_category,
  seytu_categories,
}
