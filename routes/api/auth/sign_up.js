// Librarys
const { Router } = require('express')
const router = Router()

// Models
const User = require('@models/users/User')

// Controllers
const { createAdmin, createUser } = require("@controllers/auth/Auth.Controller")

// Middlewares
const { verifyToken } = require('@middlewares/auth/token')
const verifyPermission = require('@middlewares/user/verifyPermission')
const { uploadImage } = require('@middlewares/upload/Upload.Middleware')
const verifySecretPassword = require('@middlewares/auth/verifySecretPassword')

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
  verifySecretPassword('You do not have permissions to create an administrator user'),
  createAdmin
)

// Crear cuenta como Usuario
router.post(
  '/signup/user',
  verifySecretPassword('You do not have permissions to create users'),
  [verifyToken, permissionRequiredToCreateUsers],
  upload.single('profilePhoto'),
  createUser,
  uploadImage({
    Model: User,
    path: "settings.avatar",
    cloudinary_folder: 'users',
    filename: (fileId) => `user-${fileId}`,
    uploadError: 'Ha ocurrido un error al subir la foto de perfil del usuario',
  }),
)

module.exports = router
