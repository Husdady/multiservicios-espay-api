// Librarys
const { Router } = require('express')
const router = Router()

// Models
const Admin = require('@models/users/Admin')

// Controllers
const AdminController = require('@controllers/admin/Admin.Controller')

// Middlewares
const { verifyToken } = require('@middlewares/auth/token')
const { uploadPhoto, deletePhoto } = require('@middlewares/upload/Upload.Middleware')

// Utils
const { upload } = require('@utils/multer')

// Verificar si existe un usuario administrador
router.get('/existAdmin', AdminController.existUserAdmin)

// Cambiar contraseña del usuario administrador
router.post('/change-my-password', verifyToken, AdminController.changePassword)

// Actualizar información personal del usuario administrador
router.put(
  '/update',
  verifyToken,
  upload.single('profilePhoto'),
  AdminController.updateMyPersonalInformation,
  uploadPhoto({
    Model: Admin,
    path: "settings.avatar",
    cloudinary_folder: 'admin',
    filename: (fileId) => `admin-${fileId}`,
    uploadError: 'Ha ocurrido un error al actualizar tu foto de perfil',
  }),
)

// Cerrar cuenta del usuario administrador 
router.delete(
  '/close-my-account',
  verifyToken,
  AdminController.closeMyAccount,
  deletePhoto({ cloudinary_path: 'admin' })
)

module.exports = router
