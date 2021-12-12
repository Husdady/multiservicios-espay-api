// Librarys
const { Router } = require('express')
const router = Router()

// Middlewares
const { isValidToken } = require('@middlewares/auth/token')

router.get('/verifyToken', isValidToken)

module.exports = router
