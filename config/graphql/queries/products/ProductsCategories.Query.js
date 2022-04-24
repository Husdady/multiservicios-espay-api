'use strict'

// Librarys
const { GraphQLList, GraphQLString } = require('graphql')

// Models
const Categories = require('@models/products/Category')

// Typedefs
const CategoryTypedef = require('@graphql/typedefs/products/Category.Typedef')

// Utils
const Pagination = require("@utils/Pagination");
const { setArguments } = require("@utils/Helper");

// Category Query
const category = {
  type: CategoryTypedef,
  args: setArguments({
    name: GraphQLString
  }),
  resolve(_, args) {
    try {
      return Categories.findOne(args).lean()
    } catch (err) {
      console.error('[Category.query]', err)
    }
  },
}

// Categories Query
const categories = {
  type: new GraphQLList(CategoryTypedef),
  resolve(_, args) {
    try {
      return Categories.find(args).lean()
    } catch (err) {
      console.error('[Categories.query]', err)
    }
  },
}

module.exports = {
  category,
  categories,
}
