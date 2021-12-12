// Endpoints
const signIn = require('./sign_in')
const signUp = require('./sign_up')
const verifyToken = require('./verifyToken')

// Enrutar endpoints
const router = [
  signIn,
  signUp,
  verifyToken
]

module.exports = router
