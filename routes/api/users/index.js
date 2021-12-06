// Librarys
const { Router } = require('express')
const router = Router()

// Controllers
const UsersController = require('@controllers/Users/Users.Controller')
const UploadController = require('@controllers/Upload/Upload.Controller')

router.delete('/:userId', UsersController.deleteUser, UploadController.deleteProfilePhoto)

module.exports = router
