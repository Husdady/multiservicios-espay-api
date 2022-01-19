// Librarys
const { Router } = require('express')
const router = Router()

// Controllers
const { getProducts, createProduct, deleteProduct } = require('@controllers/products/Products.Controller')
const { createCategory, editCategory, deleteCategory } = require('@controllers/products/Categories.Controller');

// Models
const { SeytuProducts } = require("@models/products/Product");
const { SeytuCategories } = require("@models/products/Category");

// Middlewares
const { verifyToken } = require('@middlewares/auth/token')
const verifyPermission = require('@middlewares/user/verifyPermission')
const { uploadMultipleImages } = require('@middlewares/upload/Upload.Middleware')

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

const Seytu = {
  getProducts: getProducts(SeytuProducts),
  createProduct: createProduct(SeytuProducts),
  deleteProduct: deleteProduct(SeytuProducts),
  createCategory: createCategory(SeytuCategories),
  editCategory: editCategory(SeytuCategories),
  deleteCategory: deleteCategory(SeytuCategories, SeytuProducts),
}

// Crear nueva categoría de los productos Seytu
router.post('/categories/add', verifyToken, Seytu.createCategory)

// Editar una categoría de los productos Seytu
router.put('/categories/:categoryId', verifyToken, Seytu.editCategory)

// Eliminar una categoría de los productos Seytu
router.delete('/categories/:categoryId', verifyToken, Seytu.deleteCategory)

// Crear nueva categoría de los productos Seytú
router.post(
  '/add-new-product',
  [verifyToken, permissionRequiredToCreateProducts],
  upload.array('productImages', 16),
  Seytu.createProduct,
  uploadMultipleImages({
    errorMessage: "A ocurrido un error al subir la imagen del producto Seytú",
    cloudinary_folder: (item) => {
      const productName = item.title.toLowerCase().replace(/\s/gim, '-')
      return `seytu.products/${productName}`
    },
    filename: (fileId) => fileId,
    onSuccess: async ({ images, itemId }) => {
      await SeytuProducts.findByIdAndUpdate(itemId, {
        defaultImage: images[0],
        images: images
      })
    } 
  }),
)

// Editar una categoría de los productos Seytú
router.put('/:productId', verifyToken, permissionRequiredToEditProducts, Seytu.createProduct)

// Eliminar una categoría de los productos Seytú
router.delete('/:productId', verifyToken, permissionRequiredToDeleteProducts, Seytu.deleteProduct)

module.exports = router
