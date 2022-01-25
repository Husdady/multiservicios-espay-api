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
  [verifyToken, permissionRequiredToCreateProducts],
  upload.array('productImages', 16),
  Omnilife.createProduct,
  uploadMultipleImages({
    errorMessage: "A ocurrido un error al subir la imagen o imágenes del producto Omnilife",
    cloudinary_folder: (product) => `omnilife.products/${product.initialName}`,
    onUploadImages: async (itemId, uploadedImages) => {
      await OmnilifeProducts.findByIdAndUpdate(itemId, {
        images: uploadedImages,
        defaultImage: uploadedImages[0],
      })
    }
  }),
)

// Actualizar información de un producto Omnilife
router.put(
  '/:productId',
  [verifyToken, permissionRequiredToEditProducts],
  upload.array('productImages', 16),
  Omnilife.editProduct,
  updateMultipleImages({
    errorMessage: "A ocurrido un error al actualizar la imagen o imágenes del producto Omnilife",
    cloudinary_folder: (product) => `omnilife.products/${product.initialName}`,
    onUploadImages: (extraData) => updateImages(OmnilifeProducts, extraData),
  }),
)

// Eliminar un producto Omnilife
router.delete('/:productId', verifyToken, permissionRequiredToDeleteProducts, Omnilife.deleteProduct)

// Crear nuevo pedido de uno o varios productos Omnilife
router.post('/orders/new-order', verifyToken, Omnilife.createOrder)

module.exports = router
