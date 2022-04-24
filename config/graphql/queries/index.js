// Queries
const RoleQuery = require('./users/Role.Query')
const UserQuery = require('./users/User.Query')
const ContactQuery = require('./contact/Contact.Query')

// Products Queries
const ProductsQuery = require('./products/Products.Query')
const ProductsCategoriesQuery = require('./products/ProductsCategories.Query')

module.exports = {
  ...RoleQuery,
  ...UserQuery,
  ...ContactQuery,
  ...ProductsQuery,
  ...ProductsCategoriesQuery,
}