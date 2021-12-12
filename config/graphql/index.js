'use strict'

const GraphQLSchema = require('./schema')
const { graphqlHTTP } = require('express-graphql')
const { verifyToken } = require('@middlewares/auth/token')

module.exports = function(app) {
  app.post(
    '/api/graphql',
    // verifyToken,
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