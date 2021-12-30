// Librarys
const { Router } = require('express')
const router = Router()

// Models
const User = require('@models/users/User')

// Controllers
const { AuthUserController, AuthAdminController } = require("@controllers/auth")

// Middlewares
const { verifyToken } = require('@middlewares/auth/token')
const verifyPermission = require('@middlewares/user/verifyPermission')
const { uploadPhoto } = require('@middlewares/upload/Upload.Middleware')

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
  uploadPhoto({
    Model: User,
    path: "settings.avatar",
    cloudinary_folder: 'users',
    filename: (fileId) => `user-${fileId}`,
    uploadError: 'Ha ocurrido un error al subir la foto de perfil del usuario',
  }),
)

module.exports = router
