// Queries
const RoleQuery = require('./users/Role.Query')
const UserQuery = require('./users/User.Query')
const ContactQuery = require('./contact/Contact.Query')
const TestimonyQuery = require('./testimonials/Testimony.Query')

module.exports = {
  ...RoleQuery,
  ...UserQuery,
  ...ContactQuery,
  ...TestimonyQuery,
}