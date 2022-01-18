// Librarys
const { Router } = require('express')
const router = Router()

// Controllers
const { createProduct, editProduct, deleteProduct } = require('@controllers/products/Products.Controller')

// Middlewares
const { verifyToken } = require('@middlewares/auth/token')
const verifyPermission = require('@middlewares/user/verifyPermission')
const { uploadMultipleImages } = require('@middlewares/upload/Upload.Middleware')
// Models
const { OmnilifeProducts } = require("@models/products/Product");
const { OmnilifeCategories } = require("@models/products/Category");
const { createCategory, editCategory, deleteCategory } = require('@controllers/products/Categories.Controller');

// Utils
const { upload } = require('@utils/multer')

// Verificar permiso para crear un producto
const permissionRequiredToCreateProducts = verifyPermission({
  action: 'crear productos',
  permission: 'createProducts',
})

// Verificar permiso para editar un producto
const permissionRequiredToEditProducts = verifyPermission({
  action: 'editar productos',
  permission: 'editProducts',
})

// Verificar permiso para eliminar un producto
const permissionRequiredToDeleteProducts = verifyPermission({
  action: 'eliminar productos',
  permission: 'deleteProducts',
})

const Omnilife = {
  createProduct: createProduct(OmnilifeProducts),
  // editProduct: editProduct(OmnilifeProducts),
  deleteProduct: deleteProduct(OmnilifeProducts),
  createCategory: createCategory(OmnilifeCategories),
  editCategory: editCategory(OmnilifeCategories),
  deleteCategory: deleteCategory(OmnilifeCategories, OmnilifeProducts),
}

// Crear nueva categoría de los productos Omnilife
router.post('/categories/add', verifyToken, Omnilife.createCategory)

// Editar una categoría de los productos Omnilife
router.put('/categories/:categoryId', verifyToken, Omnilife.editCategory)

// Eliminar una categoría de los productos Omnilife
router.delete('/categories/:categoryId', verifyToken, Omnilife.deleteCategory)

// Crear nueva categoría de los productos Omnilife
router.post(
  '/add-new-product',
  [verifyToken, permissionRequiredToCreateProducts],
  upload.array('productImages', 16),
  Omnilife.createProduct,
  uploadMultipleImages({
    errorMessage: "A ocurrido un error al subir la imagen del producto Omnilife",
    cloudinary_folder: (item) => {
      const productName = item.title.toLowerCase().replace(/\s/gim, '-')
      return `omnilife.products/${productName}`
    },
    filename: (fileId) => fileId,
    onSuccess: async ({ images, itemId }) => {
      await OmnilifeProducts.findByIdAndUpdate(itemId, {
        defaultImage: images[0],
        images: images
      })
    } 
  }),
)

// Editar una categoría de los productos Omnilife
router.put('/:productId', verifyToken, permissionRequiredToEditProducts, Omnilife.createProduct)

// Eliminar una categoría de los productos Omnilife
router.delete('/:productId', verifyToken, permissionRequiredToDeleteProducts, Omnilife.deleteProduct)

module.exports = router
