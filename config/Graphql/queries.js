// Queries
const UserQuery = require('./Queries/users/UserQuery')
const RoleQuery = require('./Queries/users/RoleQuery')

module.exports = {
  user: UserQuery.user,
  users: UserQuery.users,
  roles: RoleQuery
}
