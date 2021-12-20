// Queries
const UserQuery = require('./users/UserQuery')
const RoleQuery = require('./users/RoleQuery')

module.exports = {
  ...UserQuery,
  ...RoleQuery
}