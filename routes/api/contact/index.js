// Librarys
const { Router } = require('express')
const router = Router()

// Models
const Contact = require('@models/contact')

// Controllers
const ContactController = require('@controllers/contact/Contact.Controller')

// Middlewares
const { verifyToken } = require('@middlewares/auth/token')
const verifyPermission = require('@middlewares/user/verifyPermission')
const { uploadPhoto } = require('@middlewares/upload/Upload.Middleware')

// Utils
const { upload } = require('@utils/multer')

// Verificar permiso para actualizar la información de contacto
const permissionRequiredToEditContactInformacion = verifyPermission({
  action: 'actualizar información de contacto',
  permission: 'editContactInformacion',
})

// Crear rol de usuario
router.post(
  '/update',
  [verifyToken, permissionRequiredToEditContactInformacion],
  upload.single('contactPhoto'),
  ContactController.updateContactInformation,
  uploadPhoto({
    Model: Contact,
    path: "contactPhoto",
    cloudinary_folder: 'contact',
    filename: 'contact-yessica-milagros',
    uploadError: 'Ha ocurrido un error al añadir o actualizar la foto de contacto',
  }),
)

module.exports = router
