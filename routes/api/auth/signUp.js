// Librarys
const { Router } = require('express')
const router = Router()

// Controllers
const { AuthUserController, AuthAdminController } = require("@controllers/Auth")

// Middlewares
const { verifyToken } = require('@middlewares/Auth/token')
const verifyPermission = require('@middlewares/User/verifyPermission')
const { uploadProfilePhoto } = require('@middlewares/Upload/Upload.Middleware')

// Utils
const { upload } = require('@utils/multer')

// Verificar permiso para crear un usuario
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
  upload.single('profilePhoto'),
  AuthUserController.createUser,
  uploadProfilePhoto,
)

module.exports = router
