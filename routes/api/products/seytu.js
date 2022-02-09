// Librarys
const { Router } = require('express')
const router = Router()

// Controllers
const {
  editCategory,
  createCategory,
  deleteCategory,
} = require('@controllers/products/Categories.Controller');
const {
  createOrder,
  editProduct,
  createProduct,
  deleteProduct,
  updateImages,
} = require('@controllers/products/Products.Controller')

// Models
const { SeytuOrders } = require("@models/products/Order");
const { SeytuProducts } = require("@models/products/Product");
const { SeytuCategories } = require("@models/products/Category");

// Middlewares
const { verifyToken } = require('@middlewares/auth/token')
const verifyPermission = require('@middlewares/user/verifyPermission')
const verifySecretPassword = require('@middlewares/auth/verifySecretPassword')
const { uploadMultipleImages, updateMultipleImages } = require('@middlewares/upload/Upload.Middleware')

// Utils
const { upload } = require('@utils/multer')
const { isEmptyArray } = require('@utils/Validations')

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
  createCategory: createCategory(SeytuCategories),
  editCategory: editCategory(SeytuCategories),
  deleteCategory: deleteCategory(SeytuCategories, SeytuProducts),
  createOrder: createOrder(SeytuOrders),
  editProduct: editProduct(SeytuProducts),
  createProduct: createProduct(SeytuProducts),
  deleteProduct: deleteProduct(SeytuProducts, (deletedProduct) => {
    return `seytu.products/${deletedProduct.initialName}`
  }),
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
    errorMessage: "A ocurrido un error al subir la imagen o imágenes del producto Seytú",
    cloudinary_folder: (product) => `seytu.products/${product.initialName}`,
    onUploadImages: async (itemId, uploadedImages) => {
      await SeytuProducts.findByIdAndUpdate(itemId, {
        images: uploadedImages,
        defaultImage: uploadedImages[0],
      })
    }
  }),
)

// Actualizar información de un producto Seytú
router.put(
  '/:productId',
  [verifyToken, permissionRequiredToEditProducts],
  upload.array('productImages', 16),
  Seytu.editProduct,
  updateMultipleImages({
    errorMessage: "A ocurrido un error al actualizar las imágenes del producto Seytú",
    cloudinary_folder: (product) => `seytu.products/${product.initialName}`,
    onUploadImages: (extraData) => updateImages(SeytuProducts, extraData),
  }),
)

// Eliminar una categoría de los productos Seytú
router.delete('/:productId', verifyToken, permissionRequiredToDeleteProducts, Seytu.deleteProduct)

// Crear nuevo pedido de uno o varios productos Seytú
router.post(
  '/orders/new-order',
  verifySecretPassword('You do not have permissions to create an order for an Seytu product'),
  Seytu.createOrder
)

module.exports = router
