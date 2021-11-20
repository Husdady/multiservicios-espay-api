// Librarys
const { Router } = require('express')
const router = Router()

// Middlewares
const { isValidToken } = require('@middlewares/token')

router.get('/', isValidToken)

module.exports = router
