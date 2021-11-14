// Librarys
const { Router } = require('express')
const router = Router()

// Controllers
const { getProducts, createProduct, deleteProduct } = require('@controllers/products/Products.Controller')

// Middlewares
const { verifyToken } = require('@middlewares/token')
const verifyUserRole = require('@middlewares/verifyUserRole')

// Models
const { createProductsSchema } = require("@models/Products");

// Crear esquema de los Productos Seytú
const SeytuProducts = createProductsSchema({
  modelName: "seytuProducts",
  collectionName: "seytu-products",
})

// Roles requeridos para crear productos
const rolesRequiredToCreateProducts = verifyUserRole([
  'Administrador', 'Gerente', 'Moderador'
])

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
  [verifyToken, rolesRequiredToCreateProducts],
  Seytu.createProduct
)
// Eliminar producto
router.delete(
  '/seytu/:product',
  [verifyToken, rolesRequiredToCreateProducts],
  Seytu.deleteProduct
)

module.exports = router
