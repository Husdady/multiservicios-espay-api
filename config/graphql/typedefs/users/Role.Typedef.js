// Librarys
const { GraphQLString, GraphQLID } = require('graphql')

// Utils
const Helper = require('@utils/Helper')

// User Typedef
const RoleTypedef = Helper.createGraphQLObjectType('Role', {
  id: GraphQLID,
  name: GraphQLString,
})

module.exports = RoleTypedef
