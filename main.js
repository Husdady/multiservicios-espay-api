const express = require('express')
const app = express()

const moduleAlias = require('module-alias')

moduleAlias.addAliases({
  '@root'  : __dirname,
  '@graphql': __dirname + '/config/graphql',
})

require('./config/Graphql/queries')

const port = process.env.PORT
app.listen(port || 4000, () => {
  console.log('[INFO]', `The server is running on ${process.env.PUBLIC_URL}`)
})