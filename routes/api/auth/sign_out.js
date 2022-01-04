// Librarys
const { Router } = require('express')
const router = Router()

// Middlewares
const signout = require('@middlewares/auth/signout')
const { verifyToken } = require('@middlewares/auth/token')

router.post('/signout', verifyToken, signout)

module.exports = router
