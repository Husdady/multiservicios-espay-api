'use strict'

// Librarys
const { GraphQLString, GraphQLList, GraphQLID, GraphQLBoolean } = require('graphql')

// Models
const User = require('@models/users/User')

// Typedefs
const UserTypedef = require('@graphql/typedefs/users/user.Typedef')

// Utils
const { isEmail } = require('@utils/Validations')

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
    deleted: {
      name: 'deleted',
      type: GraphQLBoolean,
    },
    excludeUserWithEmail: {
      name: 'excludeUserWithEmail',
      type: GraphQLString,
    },
  },
  async resolve(_, args) {
    try {
      let users = []
      // .where('email').ne(params.email)
      if (!args.excludeUserWithEmail || !isEmail(args.excludeUserWithEmail)) {
        delete args.excludeUserWithEmail
        users = await User.find(args).populate('role')
      } else {
        users = await User.find(args).populate('role').where('email').ne(args.excludeUserWithEmail)
      }
      return users
    } catch (e) {
      console.error(e)
    }
  },
}

module.exports = {
  user,
  users,
}
