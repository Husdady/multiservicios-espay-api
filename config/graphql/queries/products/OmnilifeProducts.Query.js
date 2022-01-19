'use strict'

// Librarys
const { GraphQLList, GraphQLID, GraphQLString } = require('graphql')

// Models
const { OmnilifeProducts } = require('@models/products/Product')
const { OmnilifeCategories } = require('@models/products/Category')

// Typedefs
const { ProductTypedef, CategoryTypedef } = require('@graphql/typedefs/products')

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

module.exports = {
  omnilife_product,
  omnilife_products,
  omnilife_category,
  omnilife_categories,
}
