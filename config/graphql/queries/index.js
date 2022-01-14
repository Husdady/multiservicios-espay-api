// Queries
const RoleQuery = require('./users/Role.Query')
const UserQuery = require('./users/User.Query')
const ContactQuery = require('./contact/Contact.Query')
const TestimonyQuery = require('./testimonials/Testimony.Query')
const SeytuProductsQuery = require('./products/SeytuProducts.Query')
const OmnilifeProductsQuery = require('./products/OmnilifeProducts.Query')

module.exports = {
  ...RoleQuery,
  ...UserQuery,
  ...ContactQuery,
  ...TestimonyQuery,
  ...SeytuProductsQuery,
  ...OmnilifeProductsQuery,
}