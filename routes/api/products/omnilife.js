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
const { OmnilifeOrders } = require("@models/products/Order");
const { OmnilifeProducts } = require("@models/products/Product");
const { OmnilifeCategories } = require("@models/products/Category");

// Middlewares
const { verifyToken } = require('@middlewares/auth/token')
const verifyPermission = require('@middlewares/user/verifyPermission')
const verifySecretPassword = require('@middlewares/auth/verifySecretPassword')
const { uploadMultipleImages } = require('@middlewares/upload/Upload.Middleware')
const { uploadMultipleImagesToCloudinary } = require('@middlewares/upload/Upload.Cloudinary')

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

const Omnilife = {
  editCategory: editCategory(OmnilifeCategories),
  createCategory: createCategory(OmnilifeCategories),
  deleteCategory: deleteCategory(OmnilifeCategories, OmnilifeProducts),
  createOrder: createOrder(OmnilifeOrders),
  editProduct: editProduct(OmnilifeProducts),
  createProduct: createProduct(OmnilifeProducts),
  deleteProduct: deleteProduct(OmnilifeProducts, (deletedProduct) => {
    return `omnilife.products/${deletedProduct.initialName}`
  }),
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
  verifySecretPassword('No tienes permisos para crear usuarios!'),
  [verifyToken, permissionRequiredToCreateProducts],
  upload.array('productImages', 16),
  Omnilife.createProduct,
  uploadMultipleImagesToCloudinary((product) => "omnilife.products/" + product.initialName),
  uploadMultipleImages({
    Model: OmnilifeProducts,
    path: "images",
    extraFields: (images) => ({
      defaultImage: images[0]
    }),
    uploadError: (product) => {
      return "Ha ocurrido un error al subir las imágenes del producto " + "\"" + product.title + "\"";
    }
  }),
)

// Actualizar información de un producto Omnilife
router.put(
  '/:productId',
  [verifyToken, permissionRequiredToEditProducts],
  upload.array('productImages', 16),
  Omnilife.editProduct,
  uploadMultipleImagesToCloudinary((product) => "omnilife.products/" + product.initialName),
  uploadMultipleImages({
    Model: OmnilifeProducts,
    path: "images",
    extraFields: (images) => ({
      defaultImage: images[0]
    }),
    uploadError: (product) => {
      return "Ha ocurrido un error al actualizar las imágenes del producto " + "\"" + product.title + "\"";
    }
  }),
)

// Eliminar un producto Omnilife
router.delete(
  '/:productId',
  [verifyToken, permissionRequiredToDeleteProducts],
  Omnilife.deleteProduct
)

// Crear nuevo pedido de uno o varios productos Omnilife
router.post(
  '/orders/new-order',
  verifySecretPassword('You do not have permissions to create an order of an Omnilife product'),
  Omnilife.createOrder
)

module.exports = router
