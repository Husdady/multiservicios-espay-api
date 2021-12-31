'use strict'

// Librarys
const { GraphQLString, GraphQLList } = require('graphql')

// Models
const Role = require('@models/users/Role')

// Typedefs
const RoleTypedef = require('@graphql/typedefs/users/Role.Typedef')

const role = {
  type: RoleTypedef,
  args: {
    name: {
      name: 'name',
      type: GraphQLString,
    },
  },
  async resolve(_, args) {
    try {
      const roles = await Role.findOne(args)
      console.log('[RoleTypedef.role]', role)
      return roles
    } catch (e) {
      console.error(e)
    }
  },
}

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
      console.log('[RoleTypedef.roles]', roles)
      return roles
    } catch (e) {
      console.error(e)
    }
  },
}

module.exports = {
  role,
  roles
}
