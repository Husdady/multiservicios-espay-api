// Endpoints
const signUp = require('./sign_up')
const signIn = require('./sign_in')
const verifyToken = require('./verifyToken')

// Enrutar endpoints
const router = [
  signUp,
  signIn,
  verifyToken,
]

module.exports = router
