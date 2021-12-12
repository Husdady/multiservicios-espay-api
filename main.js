'use strict'

const path = require('path')
const compression = require('compression')
const express = require('express')
const app = express()

// Configuración
require('dotenv').config()

// Uso de Middlewares
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// App en modo de desarrollo
if (process.env.NODE_ENV === 'development') {
  const morgan = require('morgan')
  app.use(morgan('dev'))
}

// App en modo de producción
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

// Definir puerto
const port = process.env.PORT

// Iniciar app en puerto definido
app.listen(port || 4000, function() {
  console.log('[INFO]', `The server is running on ${process.env.PUBLIC_URL}`)
})