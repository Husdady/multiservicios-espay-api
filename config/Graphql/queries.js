// Queries
const UserQuery = require('./queries/users/UserQuery')
const RoleQuery = require('./queries/users/RoleQuery')

module.exports = {
  user: UserQuery.user,
  users: UserQuery.users,
  roles: RoleQuery
}
