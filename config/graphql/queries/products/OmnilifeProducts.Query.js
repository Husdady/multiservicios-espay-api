'use strict'

// Librarys
const { GraphQLList, GraphQLID, GraphQLString } = require('graphql')

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

const omnilife_category = {
  type: CategoryTypedef,
  args: {
    'name': {
      name: 'name',
      type: GraphQLString,
    },
  },
  async resolve(_, args) {
    try {
      const omnilifeCategory = await OmnilifeCategories.findOne(args)

      return omnilifeCategory
    } catch (err) {
      console.error('[OmnilifeProductsQuery.category]', err)
    }
  },
}

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

const omnilife_product = {
  type: ProductTypedef,
  args: {
    '_id': {
      name: '_id',
      type: GraphQLID,
    },
  },
  async resolve(_, args) {
    try {
      const omnilifeProduct = await OmnilifeProducts.findOne(args).populate("categories")

      return omnilifeProduct
    } catch (err) {
      console.error('[OmnilifeProductsQuery.product]', err)
    }
  },
}

const omnilife_products = {
  type: new GraphQLList(ProductTypedef),
  async resolve(_, args) {
    try {
      const omnilifeProducts = await OmnilifeProducts.find(args).populate("categories")
      return omnilifeProducts
    } catch (err) {
      console.error('[OmnilifeProductsQuery.products]', err)
    }
  },
}

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
