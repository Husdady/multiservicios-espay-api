// Librarys
const { Router } = require('express')
const router = Router()

// Controllers
const UsersController = require('@controllers/Users/Users.Controller')
const UploadController = require('@controllers/Upload/Upload.Controller')

// Middlewares
const { verifyToken } = require('@middlewares/Auth/token')
const verifyPermission = require('@middlewares/User/verifyPermission')

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

// Editar usuario por id
router.put(
  '/:userId',
  [verifyToken, permissionRequiredToEditUsers],
  upload.single('profilePhoto'),
  UsersController.editUser,
  UploadController.uploadProfilePhoto
)

// Eliminar usuario por id
router.delete(
  '/:userId',
  [verifyToken, permissionRequiredToDeleteUsers],
  UsersController.deleteUser,
  UploadController.deleteProfilePhoto
)

module.exports = router
