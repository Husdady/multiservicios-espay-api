const express = require('express')
const app = express()

require('./config/graphql')

const port = process.env.PORT
app.listen(port || 4000, () => {
  console.log('[INFO]', `The server is running on ${process.env.PUBLIC_URL}`)
})