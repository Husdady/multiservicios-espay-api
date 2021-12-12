// Librarys
const { Router } = require('express')
const router = Router()

// Controllers
const { getProducts, createProduct, deleteProduct } = require('@controllers/products/Products.Controller')

// Middlewares
const { verifyToken } = require('@middlewares/auth/token')

// Models
const { createProductSchema } = require("@models/products/Product");

// Crear esquema de los Productos Seytú
const OmnilifeProducts = createProductSchema({
  modelName: "OmnilifeProducts",
  collectionName: "omnilife-products",
})

// Roles requeridos para crear productos


const Omnilife = {
  getProducts: getProducts(OmnilifeProducts),
  createProduct: createProduct(OmnilifeProducts),
  deleteProduct: deleteProduct(OmnilifeProducts)
}

// Obtener todos los productos
router.get('/omnilife', Omnilife.getProducts)
// Crear nuevo producto
router.post('/omnilife', [verifyToken], Omnilife.createProduct)
// Eliminar producto
router.delete('/omnilife/:product', [verifyToken], Omnilife.deleteProduct)

module.exports = router
