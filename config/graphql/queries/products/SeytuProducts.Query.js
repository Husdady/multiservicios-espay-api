'use strict'

// Librarys
const { GraphQLList, GraphQLString } = require('graphql')

// Models
const { SeytuProducts } = require('@models/products/Product')
const { SeytuCategories } = require('@models/products/Category')

// Typedefs
const { ProductTypedef, CategoryTypedef } = require('@graphql/typedefs/products')

const seytu_category = {
  type: CategoryTypedef,
  args: {
    name: {
      name: 'name',
      type: GraphQLString,
    },
  },
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
  args: {
    _id: {
      name: '_id',
      type: GraphQLString,
    },
  },
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
  async resolve(_, args) {
    try {
      const seytuProducts = await SeytuProducts.find(args).populate("categories")
      return seytuProducts
    } catch (err) {
      console.error('[SeytuProductsQuery.products]', err)
    }
  },
}

module.exports = {
  seytu_product,
  seytu_products,
  seytu_category,
  seytu_categories,
}
