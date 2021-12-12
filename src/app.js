'use strict'

const path = require('path')
const compression = require('compression')
const express = require('express')
const app = express()

/**
 * Configuración
 */
require('dotenv').config()
require('module-alias/register')
require('@utils/cors')(app)
require('@utils/cloudinary')
// require('@graphql')(app)

/**
 * Base de datos
 */
require('@database/connection')
const createDefaultRoles = require('@middlewares/user/createDefaultRoles')
createDefaultRoles()

/**
 * Uso de Middlewares
 */
app.use(compression())
app.use(express.json())
// require('@utils/helmet')(app)
app.use(express.urlencoded({ extended: false }))
/**
 * Api Routers
 */
require('@routes/api')(app)

/**
 * Usar módulo morgan en desarrollo
 */
if (process.env.NODE_ENV === 'development') {
  const morgan = require('morgan')
  app.use(morgan('dev'))
}

if (process.env.NODE_ENV === 'production') {
  // Definir una carpeta publica
  app.use(express.static('public'))
  app.get('*', function (_, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  })

  // Redireccionar a https
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') {
      res.redirect(`https://${req.header('host')}${req.url}`)
    } else {
      next()
    }
  })
}

const port = process.env.PORT
app.listen(port || 4000, () => {
  console.log('[INFO]', `The server is running on ${process.env.PUBLIC_URL}`)
})
