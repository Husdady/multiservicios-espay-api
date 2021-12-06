'use strict'

const GraphQLSchema = require('./schema')
const { graphqlHTTP } = require('express-graphql')

module.exports = function(app) {
  app.post(
    '/api/graphql',
    graphqlHTTP(function(req) {
      return {
        rootValue: req,
        schema: GraphQLSchema,
        pretty: true,
        graphiql: process.env.NODE_ENV !== 'production',
      }
    })
  )
}
