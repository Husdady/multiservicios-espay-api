// Librarys
const { Router } = require('express')
const router = Router()

// Middlewares
const signIn = require('@middlewares/signIn')

router.post('/', signIn)

module.exports = router
