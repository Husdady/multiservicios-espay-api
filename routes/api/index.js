// Authentication
const auth = require('./auth/_exports')

// Roles
const roles = require('./roles')

// Users
const users = require('./users')

// User admin
const userAdmin = require('./admin')

// Products
const products = require('./products')

// Contact
const contact = require('./contact')

module.exports = function(app) {
  app.use('/api/auth/', auth)
  app.use('/api/roles/', roles)
  app.use('/api/users/', users)
  app.use('/api/admin/', userAdmin)
  app.use('/api/contact/', contact)
  app.use('/api/products/', products)
}
