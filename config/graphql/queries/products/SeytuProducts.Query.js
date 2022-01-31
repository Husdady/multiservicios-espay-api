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
  ProductOrderTypedef
} = require('@graphql/typedefs/products')

// Utils
const Helper = require("@utils/Helper");

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

const seytu_products = {
  type: new GraphQLList(ProductTypedef),
  args: Helper.setArguments({
    limit: GraphQLInt,
    getLastestProducts: GraphQLBoolean,
  }),
  async resolve(_, args) {
    try {
      console.log(args)
      if (args.getLastestProducts) {
        const lastestSeytuProducts = await SeytuProducts.find({}).sort({ _id: -1 }).limit(args.limit)

        return lastestSeytuProducts;
      }

      const seytuProducts = await SeytuProducts.find(args).populate("categories")
      return seytuProducts
    } catch (err) {
      console.error('[SeytuProductsQuery.products]', err)
    }
  },
}

const seytu_order = {
  type: ProductOrderTypedef,
  args: {
    'clientId': {
      name: 'clientId',
      type: GraphQLString,
    },
  },
  async resolve(_, args) {
    try {
      const seytuOrder = await SeytuOrders.findOne(args).populate("products.product")

      return seytuOrder
    } catch (err) {
      console.error('[seytuProductsQuery.order]', err)
    }
  },
}

const seytu_orders = {
  type: new GraphQLList(ProductOrderTypedef),
  async resolve(_, args) {
    try {
      const seytuOrders = await SeytuOrders.find(args).populate("products.product")
      console.log('[seytuOrders]', seytuOrders)
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
