// Librarys
const { Router } = require('express')
const router = Router()

// Controllers
const UsersController = require('@controllers/Users/Users.Controller')

router.delete('/:userId', UsersController.deleteUser)

module.exports = router
