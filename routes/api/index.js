// Authentication
const auth = require('./Auth')

// Users
const users = require('./Users')

// User admin
const userAdmin = require('./Admin')

// Products
const seytuProducts = require('./Products/seytu')
const omnilifeProducts = require('./Products/omnilife')

module.exports = function(app) {
  app.use('/api/auth/', auth)
  app.use('/api/users/', users)
  app.use('/api/admin/', userAdmin)
  app.use('/api/products/seytu/', seytuProducts)
  app.use('/api/products/omnilife/', omnilifeProducts)
}
