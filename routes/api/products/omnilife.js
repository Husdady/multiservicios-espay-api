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
const OmnilifeProducts = createProductsSchema({
  modelName: "OmnilifeProducts",
  collectionName: "omnilife-products",
})

// Roles requeridos para crear productos
const rolesRequiredToCreateProducts = verifyUserRole(['Administrador', 'Gerente', 'Moderador'])

const Omnilife = {
  getProducts: getProducts(OmnilifeProducts),
  createProduct: createProduct(OmnilifeProducts),
  deleteProduct: deleteProduct(OmnilifeProducts)
}

// Obtener todos los productos
router.get('/omnilife', Omnilife.getProducts)
// Crear nuevo producto
router.post('/omnilife', [verifyToken, rolesRequiredToCreateProducts], Omnilife.createProduct)
// Eliminar producto
router.delete('/omnilife/:product', [verifyToken, rolesRequiredToCreateProducts], Omnilife.deleteProduct)

module.exports = router
