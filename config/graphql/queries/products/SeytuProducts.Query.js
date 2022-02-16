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
const Pagination = require("@utils/Pagination");
const { setArguments } = require("@utils/Helper");

// Seytu Category Query
const seytu_category = {
  type: CategoryTypedef,
  args: setArguments({
    name: GraphQLString
  }),
  async resolve(_, args) {
    try {
      const seytuCategory = await SeytuCategories.findOne(args).lean()

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
      const seytuCategory = await SeytuCategories.find(args).lean()

      return seytuCategory
    } catch (err) {
      console.error('[SeytuProductsQuery.category]', err)
    }
  },
}

// Seytu Product Query
const seytu_product = {
  type: ProductTypedef,
  args: setArguments({
    _id: GraphQLID,
    name: GraphQLString,
  }),
  async resolve(_, args) {
    try {
      const config = {}

      if (args._id) {
        config._id = args._id
      }

      if (args.name) {
        config.title = {
          $regex: new RegExp(args.name.replace(/\W/g, '\\$&'), "gi"),
        }
      }

      const seytuProduct = await SeytuProducts.findOne(config).populate("categories").lean()

      return seytuProduct;
    } catch (err) {
      console.error('[SeytuProductsQuery.product]', err)
    }
  },
}

// Seytu Products Query
const seytu_products = {
  type: new GraphQLList(ProductTypedef),
  args: setArguments({
    skip: GraphQLInt,
    limit: GraphQLInt,
    pagination: GraphQLBoolean,
    getLastestProducts: GraphQLBoolean,
    getAleatoryProducts: GraphQLBoolean,
    filters: ProductFiltersTypedef,
  }),
  async resolve(_, args) {
    try {
      const {
        skip,
        limit,
        filters,
        pagination,
        getLastestProducts,
        getAleatoryProducts,
      } = args;

      // Si se deben obtener los últimos productos Seytú
      if (getLastestProducts) {
        const lastestSeytuProducts = await Pagination.getLastestItems(SeytuProducts, limit);

        return lastestSeytuProducts;
      }

      // Si se deben obtener los productos Seytú aleatoriamente
      if (getAleatoryProducts) {
        const aleatorySeytuProducts = await Pagination.getAleatoryProducts({
          limit: limit,
          Model: SeytuProducts,
          productToExclude: filters.title,
        })

        return aleatorySeytuProducts;
      }

      // Si se debe paginar los productos Seytú
      if (pagination) {
        const config = Pagination.setProductsPagination({
          skip: skip,
          limit: limit,
          filters: filters,
          model: SeytuProducts,
        })

        const paginateSeytuProducts = await Pagination.paginate(config)
          .populate("categories")
          .lean()

        return paginateSeytuProducts;
      }

      const seytuProducts = await SeytuProducts.find(args).populate("categories").lean()
      return seytuProducts;
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
  args: setArguments({
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
  args: setArguments({
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
