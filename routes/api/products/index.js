// Librarys
const { Router } = require('express')
const router = Router()

// Controllers
const {
  editCategory,
  createCategory,
  deleteCategory,
} = require('@controllers/products/Category.Controller');
const {
  editProduct,
  createProduct,
  deleteProduct,
} = require('@controllers/products/Product.Controller')

// Models
const Products = require("@models/products/Product");
const Categories = require("@models/products/Category");

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

const MyProducts = {
  // Categorías
  editCategory: editCategory(Categories),
  createCategory: createCategory(Categories),
  deleteCategory: deleteCategory(Categories, Products),
  
  // Productos 
  editProduct: editProduct(Products),
  createProduct: createProduct(Products),
  deleteProduct: deleteProduct(Products, (deletedProduct) => {
    return `products/${deletedProduct.initialName}`
  }),
}

// Crear nueva categoría de los productos
router.post('/categories/add', verifyToken, MyProducts.createCategory)

// Editar una categoría de los productos
router.put('/categories/:categoryId', verifyToken, MyProducts.editCategory)

// Eliminar una categoría de los productos
router.delete('/categories/:categoryId', verifyToken, MyProducts.deleteCategory)

// Crear nueva categoría de los productos
router.post(
  '/add-new-product',
  verifySecretPassword('No tienes permisos para crear productos!'),
  [verifyToken, permissionRequiredToCreateProducts],
  upload.array('productImages', 16),
  MyProducts.createProduct,
  uploadMultipleImagesToCloudinary((product) => "products/" + product.initialName),
  uploadMultipleImages({
    Model: Products,
    path: "images",
    extraFields: (images) => ({
      defaultImage: images[0]
    }),
    uploadError: (product) => {
      return "Ha ocurrido un error al subir las imágenes del producto " + "\"" + product.name + "\"";
    }
  }),
)

// Actualizar información de un producto
router.put(
  '/:productId',
  [verifyToken, permissionRequiredToEditProducts],
  upload.array('productImages', 16),
  MyProducts.editProduct,
  uploadMultipleImagesToCloudinary((product) => "products/" + product.initialName),
  uploadMultipleImages({
    Model: Products,
    path: "images",
    extraFields: (images) => ({
      defaultImage: images[0]
    }),
    uploadError: (product) => {
      return "Ha ocurrido un error al actualizar las imágenes del producto " + "\"" + product.name + "\"";
    }
  }),
)

// Eliminar un producto
router.delete(
  '/:productId',
  [verifyToken, permissionRequiredToDeleteProducts],
  MyProducts.deleteProduct
)

module.exports = router
