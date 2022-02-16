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
const { uploadImageToCloudinary } = require('@middlewares/upload/Upload.Cloudinary')

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
  verifySecretPassword('No tienes permisos para crear usuarios!'),
  [verifyToken, permissionRequiredToCreateUsers],
  upload.single('profilePhoto'),
  createUser,
  uploadImageToCloudinary((fileId) => ({
    folder: "users",
    public_id: "user-" + fileId,
  })),
  uploadImage({
    Model: User,
    path: "settings.avatar",
    uploadError: 'Ha ocurrido un error al subir la foto de perfil del usuario',
  }),
)

module.exports = router
