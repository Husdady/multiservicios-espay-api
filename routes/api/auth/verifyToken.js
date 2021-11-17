// Librarys
const { Router } = require('express')
const router = Router()

// Middlewares
const { isValidToken } = require('@middlewares/token')

router.post('/', isValidToken)

module.exports = router
