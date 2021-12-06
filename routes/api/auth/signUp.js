// Librarys
const { upload } = require('@utils/multer')
const { Router } = require('express')
const router = Router()

// Controllers
const UploadController = require('@controllers/Upload/Upload.Controller')
const { AuthUserController, AuthAdminController } = require("@controllers/Auth")

// Middlewares
const { verifyToken } = require('@middlewares/Auth/token')
const verifyPermission = require('@middlewares/User/verifyPermission')
const { setFileNameToUserProfilePhoto } = require('@middlewares/Upload/setFilename')

// Verificar un permiso
const permissionRequiredToCreateUsers = verifyPermission({
  action: 'crear usuarios',
  permission: 'createUsers',
})

// Crear cuenta como Admin
router.post(
  "/signup/admin",
  AuthAdminController.createAdmin
),

// Crear cuenta como Usuario
router.post(
  '/signup/user',
  [verifyToken, permissionRequiredToCreateUsers],
  setFileNameToUserProfilePhoto,
  upload.single('profilePhoto'),
  AuthUserController.createUser,
  UploadController.uploadProfilePhoto,
)

module.exports = router
