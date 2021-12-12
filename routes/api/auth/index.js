// Endpoints
const signIn = require('./signIn')
const signUp = require('./signUp')
const verifyToken = require('./verifyToken')

// Enrutar endpoints
const router = [
  signIn,
  signUp,
  verifyToken
]

module.exports = router
