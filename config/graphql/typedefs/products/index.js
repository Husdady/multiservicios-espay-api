// Librarys
const { GraphQLDateTime } = require('graphql-iso-date')
const { GraphQLID, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLList } = require('graphql')

// Utils
const Helper = require('@utils/Helper')

// Product Sort By Typedef
const ProductSortByTypedef = Helper.createGraphQLObjectType('ProductSortBy', {
  title: GraphQLInt,
  stock: GraphQLInt,
  price: GraphQLInt,
  totalVisits: GraphQLInt,
  createdAt: GraphQLInt,
}, "input")

// Filters Product Typedef
const ProductFiltersTypedef = Helper.createGraphQLObjectType('ProductFilters', {
  title: GraphQLString,
  sortBy: ProductSortByTypedef,
  categories: new GraphQLList(GraphQLID),
}, "input");

// Category Typedef
const CategoryTypedef = Helper.createGraphQLObjectType('Category', {
  _id: GraphQLID,
  name: GraphQLString,
})

// Product Benefit Typedef
const ProductBenefitTypedef = Helper.createGraphQLObjectType('ProductBenefit', {
  _id: GraphQLID,
  benefit: GraphQLString,
})

// Product Image Typedef
const ProductImageTypedef = Helper.createGraphQLObjectType('ProductDefaultImage', {
  _id: GraphQLID,
  public_id: GraphQLID,
  url: GraphQLString,
  size: GraphQLFloat,
  width: GraphQLFloat,
  height: GraphQLFloat,
  format: GraphQLString,
  filename: GraphQLString,
  cloudinary_path: GraphQLString,
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

// Client Products Orders
const ClientProductsOrdersTypedef = Helper.createGraphQLObjectType('ClientProductsOrdersTypedef', {
  quantity: GraphQLFloat,
  product: ProductTypedef
})

// Product Order Typedef
const ProductOrderTypedef = Helper.createGraphQLObjectType('ProductOrder', {
  _id: GraphQLID,
  clientId: GraphQLString,
  clientName: GraphQLString,
  phone: GraphQLString,
  status: GraphQLString,
  products: new GraphQLList(ClientProductsOrdersTypedef),
  createdAt: GraphQLDateTime,
  updatedAt: GraphQLDateTime,
})

module.exports = {
  CategoryTypedef,
  ProductTypedef,
  ProductOrderTypedef,
  ProductFiltersTypedef,
}
