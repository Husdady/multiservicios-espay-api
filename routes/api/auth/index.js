// Endpoints
const signUp = require('./sign_up')
const signIn = require('./sign_in')
const signOut = require('./sign_out')
const verifyToken = require('./verifyToken')

// Enrutar endpoints
const router = [
  signUp,
  signIn,
  signOut,
  verifyToken
]

module.exports = router
