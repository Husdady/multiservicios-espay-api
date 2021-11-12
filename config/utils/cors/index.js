'use strict'

const cors = require('cors')

module.exports = function(app) {
  const corsOptions = {
    origin: process.env.ORIGIN,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: [
      'Origin',
      'Content-Type',
      'X-Requested-With',
      'Accept',
      'Authorization',
    ],
  }
  app.use(cors(corsOptions))
}
