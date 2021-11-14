// Librarys
const { Router } = require('express')
const router = Router()

// Middlewares
const signIn = require('@middlewares/signin')

router.post('/', signIn)

module.exports = router
