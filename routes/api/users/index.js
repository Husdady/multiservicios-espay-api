const { Router } = require('express')
const router = Router()
const Users = require('@controllers/users/Users.Controller')

router.get('/', Users.getAllUsers)

module.exports = router
