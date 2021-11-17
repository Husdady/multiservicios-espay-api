// Sign in
const signIn = require('@routes/api/auth/signin')

// Verify token
const verifyToken = require('@routes/api/auth/verifyToken')

// Auth user
const user = require('@routes/api/auth/user')
const admin = require('@routes/api/auth/admin')

// User admin
const userAdmin = require('@routes/api/admin/user-admin')

// Users
const users = require('@routes/api/users')

// Products
const productosSeytu = require('@routes/api/products/seytu')
const productosOmnilife = require('@routes/api/products/omnilife')

const products = [productosSeytu, productosOmnilife]

module.exports = function (app) {
  app.use('/api/auth/user/', user)
  app.use('/api/auth/admin/', admin)
  app.use('/api/auth/signin/', signIn)
  app.use('/api/auth/verifyToken/', verifyToken)
  app.use('/api/admin/', userAdmin)
  app.use('/api/users/', users)
  app.use('/api/products/', products)
}
