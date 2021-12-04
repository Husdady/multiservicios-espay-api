// Librarys
const { upload } = require('@utils/multer')
const { Router } = require('express')
const router = Router()

// Controllers
const UserController = require("@controllers/auth/User.Controller");
const UsersController = require('@controllers/users/Users.Controller')

// Middlewares
const { verifyToken } = require('@middlewares/token')
const verifyPermission = require('@middlewares/verifyPermission')
const { setFileNameToUserProfilePhoto } = require('@middlewares/setFilename')

// Verificar un permiso
const permissionRequiredToCreateUsers = verifyPermission({
  action: 'crear usuarios',
  permission: 'createUsers',
})

router.post(
  '/signup',
  [verifyToken, permissionRequiredToCreateUsers],
  setFileNameToUserProfilePhoto,
  upload.single('profilePhoto'),
  UserController.createUser,
  UsersController.uploadProfilePhoto,
)

module.exports = router
