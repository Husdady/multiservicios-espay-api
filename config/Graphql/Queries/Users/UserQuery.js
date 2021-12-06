'use strict'

// Librarys
const { GraphQLString, GraphQLList } = require('graphql')

// Models
const User = require('@models/Users/User')

// Typedefs
const UserTypedef = require('@graphql/Types/Users/User.Typedef')

const user = {
  type: UserTypedef,
  args: {
    fullname: {
      name: 'fullname',
      type: GraphQLString,
    },
  },
  async resolve(root, params, gaaa) {
    console.log('[user]')
    try {
      const user = await User.findOne(params)
      return user
    } catch (e) {
      console.error(e)
    }
  },
}

const users = {
  type: new GraphQLList(UserTypedef),
  args: {
    email: {
      name: 'email',
      type: GraphQLString,
    },
  },
  async resolve(root, params) {
    try {
      const users = await User.find(params).populate('role')
      return users
    } catch (e) {
      console.error(e)
    }
  },
}

module.exports = {
  user,
  users
}
