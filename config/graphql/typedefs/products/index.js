// Librarys
const { GraphQLDateTime } = require('graphql-iso-date')
const { GraphQLID, GraphQLString, GraphQLFloat, GraphQLList } = require('graphql')

// Utils
const Helper = require('@utils/Helper')

// Category Typedef
const CategoryTypedef = Helper.createGraphQLObjectType('Category', {
  _id: GraphQLID,
  name: GraphQLString,
})

// Product Benefit Typedef
const ProductBenefitTypedef = Helper.createGraphQLObjectType('ProductDefaultBenefit', {
  _id: GraphQLID,
  benefit: GraphQLString,
})

// Product Image Typedef
const ProductImageTypedef = Helper.createGraphQLObjectType('ProductDefaultImage', {
  _id: GraphQLID,
  url: GraphQLString,
  size: GraphQLFloat,
  width: GraphQLFloat,
  height: GraphQLFloat,
  format: GraphQLString,
  filename: GraphQLString
})

// Product Typedef
const ProductTypedef = Helper.createGraphQLObjectType('Product', {
  _id: GraphQLID,
  price: GraphQLFloat,
  stock: GraphQLFloat,
  title: GraphQLString,
  content: GraphQLString,
  usageMode: GraphQLString,
  description: GraphQLString,
  defaultImage: ProductImageTypedef,
  images: new GraphQLList(ProductImageTypedef),
  categories: new GraphQLList(CategoryTypedef),
  benefits: new GraphQLList(ProductBenefitTypedef),
  createdAt: GraphQLDateTime,
  updatedAt: GraphQLDateTime,
})

module.exports = { ProductTypedef, CategoryTypedef }
