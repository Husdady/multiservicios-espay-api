'use strict'

const cors = require('cors')

module.exports = function(app) {
  const corsOptions = {
    // origin: process.env.ORIGIN,
    origin: "*",
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: [
      'Origin',
      'Content-Type',
      'Accept',
      'Authorization',
      'SECRET_PASSWORD'
    ],
  }
  app.use(cors(corsOptions))
}
