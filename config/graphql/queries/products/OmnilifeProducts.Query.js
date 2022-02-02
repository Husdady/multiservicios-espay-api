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
const { OmnilifeOrders } = require('@models/products/Order')
const { OmnilifeProducts } = require('@models/products/Product')
const { OmnilifeCategories } = require('@models/products/Category')

// Typedefs
const {
  CategoryTypedef,
  ProductTypedef,
  ProductOrderTypedef
} = require('@graphql/typedefs/products')

// Utils
const Helper = require("@utils/Helper");

// Omnilife Categoru Query
const omnilife_category = {
  type: CategoryTypedef,
  args: Helper.setArguments({
    name: GraphQLString
  }),
  async resolve(_, args) {
    try {
      const omnilifeCategory = await OmnilifeCategories.findOne(args)

      return omnilifeCategory
    } catch (err) {
      console.error('[OmnilifeProductsQuery.category]', err)
    }
  },
}

// Omnilife Categories Query
const omnilife_categories = {
  type: new GraphQLList(CategoryTypedef),
  async resolve(_, args) {
    try {
      const omnilifeCategory = await OmnilifeCategories.find(args)

      return omnilifeCategory
    } catch (err) {
      console.error('[OmnilifeProductsQuery.category]', err)
    }
  },
}

// Omnilife Product Query
const omnilife_product = {
  type: ProductTypedef,
  args: Helper.setArguments({
    _id: GraphQLID,
  }),
  async resolve(_, args) {
    try {
      const omnilifeProduct = await OmnilifeProducts.findOne(args).populate("categories")

      return omnilifeProduct
    } catch (err) {
      console.error('[OmnilifeProductsQuery.product]', err)
    }
  },
}

// Omnilife Products Query
const omnilife_products = {
  type: new GraphQLList(ProductTypedef),
  args: Helper.setArguments({
    limit: GraphQLInt,
    getLastestProducts: GraphQLBoolean,
  }),
  async resolve(_, args) {
    const { limit, getLastestProducts } = args;

    try {
      // Si se deben obtener los últimos productos Omnilife
      if (getLastestProducts) {
        const lastestOmnilifeProducts = await Helper.getLastestItems(OmnilifeProducts, limit)

        return lastestOmnilifeProducts
      }
      
      const omnilifeProducts = await OmnilifeProducts.find(args).populate("categories")
      return omnilifeProducts
    } catch (err) {
      console.error('[OmnilifeProductsQuery.products]', err)
    }
  },
}

// Omnilife Order Query
const omnilife_order = {
  type: ProductOrderTypedef,
  args: {
    'clientId': {
      name: 'clientId',
      type: GraphQLString,
    },
  },
  async resolve(_, args) {
    try {
      const omnilifeOrder = await OmnilifeOrders.findOne(args).populate("products.product")

      return omnilifeOrder
    } catch (err) {
      console.error('[OmnilifeProductsQuery.order]', err)
    }
  },
}

// Omnilife Orders Query
const omnilife_orders = {
  type: new GraphQLList(ProductOrderTypedef),
  async resolve(_, args) {
    try {
      const omnilifeOrders = await OmnilifeOrders.find(args).populate("products.product")
      return omnilifeOrders
    } catch (err) {
      console.error('[OmnilifeProductsQuery.orders]', err)
    }
  },
}

module.exports = {
  omnilife_order,
  omnilife_orders,
  omnilife_product,
  omnilife_products,
  omnilife_category,
  omnilife_categories,
}
