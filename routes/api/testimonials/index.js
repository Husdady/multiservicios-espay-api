// Librarys
const { Router } = require('express')
const router = Router()

// Models
const Testimony = require('@models/testimonials/Testimony')

// Controllers
const Testimonials = require('@controllers/testimonials/Testimonials.Controller')

// Middlewares
const { verifyToken } = require('@middlewares/auth/token')
const verifyPermission = require('@middlewares/user/verifyPermission')
const { uploadPhoto } = require('@middlewares/upload/Upload.Middleware')

// Utils
const { upload } = require('@utils/multer')

// Verificar permiso para crear un testimonio
const permissionRequiredToCreateTestimonials = verifyPermission({
  action: 'crear testimonios',
  permission: 'createTestimonials',
})

// Verificar permiso para editar un testimonio
const permissionRequiredToEditTestimonials = verifyPermission({
  action: 'editar testimonios',
  permission: 'editTestimonials',
})

// Crear nuevo testimonio
router.post(
  '/add',
  [verifyToken, permissionRequiredToCreateTestimonials],
  upload.single('authorPhoto'),
  Testimonials.createNewTestimony,
  uploadPhoto({
    Model: Testimony,
    path: "author.photo",
    cloudinary_folder: 'testimonials',
    filename: (fileId) => `testimony-${fileId}`,
    uploadError: 'Ha ocurrido un error al subir la foto del autor',
  }),
)

router.put(
  '/:testimonyId',
  [verifyToken, permissionRequiredToEditTestimonials],
  upload.single('authorPhoto'),
  Testimonials.editTestimony,
  uploadPhoto({
    Model: Testimony,
    path: "author.photo",
    cloudinary_folder: 'testimonials',
    filename: (fileId) => `testimony-${fileId}`,
    uploadError: 'Ha ocurrido un error al actualizar la foto del autor',
  }),
)

module.exports = router
