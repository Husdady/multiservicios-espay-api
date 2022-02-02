// Librarys
const { GraphQLDateTime } = require('graphql-iso-date')
const { GraphQLID, GraphQLString } = require('graphql')

// Utils
const Helper = require('@utils/Helper')

// Author Photo Typedef
const AuthorPhotoTypedef = Helper.createGraphQLObjectType('AuthorPhotoTestimony', {
  url: GraphQLString,
  width: GraphQLString,
  height: GraphQLString,
})

// Author Typedef
const AuthorTypedef = Helper.createGraphQLObjectType('AuthorTestimony', {
  age: GraphQLString,
  name: GraphQLString,
  country: GraphQLString,
  short_name: GraphQLString,
  photo: AuthorPhotoTypedef,
})

// User Typedef
const TestimonyTypedef = Helper.createGraphQLObjectType('Testimony', {
  _id: GraphQLID,
  author: AuthorTypedef,
  testimony: GraphQLString,
  createdAt: GraphQLDateTime,
  updatedAt: GraphQLDateTime
})

module.exports = TestimonyTypedef
