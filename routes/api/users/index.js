// Librarys
const { Router } = require('express')
const router = Router()

// Models
const User = require('@models/users/User')

// Controllers
const UsersController = require('@controllers/users/Users.Controller')

// Middlewares
const { verifyToken } = require('@middlewares/auth/token')
const verifyPermission = require('@middlewares/user/verifyPermission')
const { uploadPhoto, deletePhoto } = require('@middlewares/upload/Upload.Middleware')

// Utils
const { upload } = require('@utils/multer')

// Verificar permiso para editar un usuario
const permissionRequiredToEditUsers = verifyPermission({
  action: 'editar usuarios',
  permission: 'editUsers',
})

// Verificar permiso para eliminar un usuario
const permissionRequiredToDeleteUsers = verifyPermission({
  action: 'eliminar usuarios',
  permission: 'deleteUsers',
})

// Verificar permiso para eliminar un usuario
const permissionRequiredToRestoreUsers = verifyPermission({
  action: 'restaurar usuarios',
  permission: 'restoreUsers',
})

// Editar usuario por id
router.put(
  '/:userId',
  [verifyToken, permissionRequiredToEditUsers],
  upload.single('profilePhoto'),
  UsersController.editUser({
    errors: {
      userDataIsTheSame: 'La información del usuario es la misma, debe proporcionar nuevos datos'
    },
    successMessage: ({ fullname }) => 'Se ha actualizado exitosamente la información de ' + fullname,
  }),
  uploadPhoto({
    Model: User,
    path: "settings.avatar",
    cloudinary_folder: 'users',
    filename: (fileId) => `user-${fileId}`,
    uploadError: 'Ha ocurrido un error al actualizar la foto de perfil del usuario',
  }),
)

// Actualizar información personal del usuario administrador
router.put(
  '/:userId/update',
  verifyToken,
  upload.single('profilePhoto'),
  UsersController.editUser({
    errors: {
      userDataIsTheSame: 'Tu información es la misma, debes proporcionar nuevos datos'
    },
    successMessage: 'Se actualizó tu información personal exitosamente',
  }),
  uploadPhoto({
    Model: User,
    path: "settings.avatar",
    cloudinary_folder: 'users',
    filename: (fileId) => `user-${fileId}`,
    uploadError: 'Ha ocurrido un error al actualizar tu foto de perfil',
  }),
)

// Eliminar usuario por id
router.delete(
  '/:userId',
  [verifyToken, permissionRequiredToDeleteUsers],
  UsersController.deleteUser,
  deletePhoto({ cloudinary_path: 'users/user' })
)

// Restaurar usuario por id
router.post('/:userId/restore', [verifyToken, permissionRequiredToRestoreUsers], UsersController.restoreUser)

// Cambiar contraseña de un usuario
router.post('/:userId/change-my-password', verifyToken, UsersController.changePassword)

// Cerrar cuenta de un usuario
router.delete(
  '/:userId/close-my-account',
  verifyToken,
  UsersController.closeMyAccount,
  deletePhoto({ cloudinary_path: 'users/user' })
)

module.exports = router
