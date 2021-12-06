// Librarys
const { Router } = require('express')
const router = Router()

// Middlewares
const signin = require('@middlewares/Auth/signin')

router.post('/signin', signin)

module.exports = router
