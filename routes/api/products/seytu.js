// Librarys
const { Router } = require('express')
const router = Router()

// Controllers
const { getProducts, createProduct, deleteProduct } = require('@controllers/Products/Products.Controller')

// Middlewares
const { verifyToken } = require('@middlewares/Auth/token')

// Models
const { createProductSchema } = require("@models/Products/Product");

// Crear esquema de los Productos Seytú
const SeytuProducts = createProductSchema({
  modelName: "seytuProducts",
  collectionName: "seytu-products",
})

// Roles requeridos para crear productos

const Seytu = {
  getProducts: getProducts(SeytuProducts),
  createProduct: createProduct(SeytuProducts),
  deleteProduct: deleteProduct(SeytuProducts)
}

// Obtener todos los productos
router.get('/seytu', Seytu.getProducts)
// Crear nuevo producto
router.post(
  '/seytu',
  [verifyToken],
  Seytu.createProduct
)
// Eliminar producto
router.delete(
  '/seytu/:product',
  [verifyToken],
  Seytu.deleteProduct
)

module.exports = router
