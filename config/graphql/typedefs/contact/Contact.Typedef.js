// Librarys
const { GraphQLString, GraphQLList } = require('graphql')

// Utils
const Helper = require('@utils/Helper')

const ContactFacebookPageTypedef = Helper.createGraphQLObjectType('ContactFacebookPage', {
  name: GraphQLString,
  url: GraphQLString,
})

// Contact Photo Typedef
const ContactPhotoTypedef = Helper.createGraphQLObjectType('ContactPhoto', {
  url: GraphQLString,
  width: GraphQLString,
  heigth: GraphQLString,
})

// Contact Typedef
const ContactTypedef = Helper.createGraphQLObjectType('Contact', {
  location: GraphQLString,
  email: GraphQLString,
  phone: GraphQLString,
  facebookPage: ContactFacebookPageTypedef,
  contactPhoto: ContactPhotoTypedef,
})

module.exports = ContactTypedef
