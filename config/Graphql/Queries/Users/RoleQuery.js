'use strict'

// Librarys
const { GraphQLString, GraphQLList } = require('graphql')

// Models
const Role = require('@models/Users/Role')

// Typedefs
const RoleTypedef = require('@graphql/Types/Users/Role.Typedef')

const roles = {
  type: new GraphQLList(RoleTypedef),
  args: {
    name: {
      name: 'name',
      type: GraphQLString,
    },
  },
  async resolve(_, args) {
    try {
      const roles = await Role.find(args).where('name').ne('Administrador')
      console.log('[RoleTypedef]', roles)
      return roles
    } catch (e) {
      console.error(e)
    }
  },
}

module.exports = roles