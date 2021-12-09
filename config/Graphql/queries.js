// Queries
const UserQuery = require('./Queries/Users/UserQuery')
const RoleQuery = require('./Queries/Users/RoleQuery')

module.exports = {
  user: UserQuery.user,
  users: UserQuery.users,
  roles: RoleQuery
}
