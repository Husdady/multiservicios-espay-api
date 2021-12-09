'use strict'

// Librarys
const { GraphQLString, GraphQLList, GraphQLID } = require('graphql')

// Models
const User = require('@models/Users/User')

// Typedefs
const UserTypedef = require('@graphql/Types/Users/User.Typedef')

const user = {
  type: UserTypedef,
  args: {
    _id: {
      name: '_id',
      type: GraphQLID,
    },
  },
  async resolve(_, args) {
    console.log('[user]')
    try {
      const user = await User.findOne(args).populate('role')
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
