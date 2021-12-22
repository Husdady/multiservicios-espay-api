// Librarys
const { Router } = require('express')
const router = Router()

// Controllers
const UsersController = require('@controllers/users/Users.Controller')

// Middlewares
const { verifyToken } = require('@middlewares/auth/token')
const { uploadProfilePhoto, deleteProfilePhoto } = require('@middlewares/upload/Upload.Middleware')
const verifyPermission = require('@middlewares/user/verifyPermission')

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
  UsersController.editUser,
  uploadProfilePhoto
)

// Eliminar usuario por id
router.delete(
  '/:userId',
  [verifyToken, permissionRequiredToDeleteUsers],
  UsersController.deleteUser,
  deleteProfilePhoto
)

// Restaurar usuario por id
router.post(
  '/:userId/restore',
  // [verifyToken, permissionRequiredToRestoreUsers],
  UsersController.restoreUser
)

module.exports = router
