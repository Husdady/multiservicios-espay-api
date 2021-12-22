// Librarys
const { GraphQLDateTime } = require('graphql-iso-date')
const { GraphQLID, GraphQLString, GraphQLBoolean } = require('graphql')

// Utils
const Helper = require('@utils/Helper')

// Avatar Settings User Typedef
const AvatarTypedef = Helper.createGraphQLObjectType('UserSettingsAvatar', {
  url: GraphQLString,
  width: GraphQLString,
  heigth: GraphQLString,
})

// Settings User Typedef
const SettingsTypedef = Helper.createGraphQLObjectType('UserSettings', {
  theme: GraphQLString,
  avatar: AvatarTypedef,
})

// Settings User Typedef
const RoleTypedef = Helper.createGraphQLObjectType('UserRole', {
  name: GraphQLString,
})

// User Typedef
const UserTypedef = Helper.createGraphQLObjectType('User', {
  _id: GraphQLID,
  fullname: GraphQLString,
  email: GraphQLString,
  role: RoleTypedef,
  settings: SettingsTypedef,
  deleted: GraphQLBoolean,
  verifyEmail: GraphQLBoolean,
  deletedAt: GraphQLDateTime,
  createdAt: GraphQLDateTime,
  updatedAt: GraphQLDateTime
})

module.exports = UserTypedef
