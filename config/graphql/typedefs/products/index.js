// Librarys
const { GraphQLID, GraphQLString } = require('graphql')

// Utils
const Helper = require('@utils/Helper')

// Product Typedef
const ProductTypedef = Helper.createGraphQLObjectType('Product', {
  _id: GraphQLID,
  name: GraphQLString,
})

// Category Typedef
const CategoryTypedef = Helper.createGraphQLObjectType('Category', {
  _id: GraphQLID,
  name: GraphQLString,
})

module.exports = { ProductTypedef, CategoryTypedef }
