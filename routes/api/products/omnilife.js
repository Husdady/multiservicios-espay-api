const { Router } = require('express')
const router = Router()
const Omnilife = require('@controllers/products/omnilife/Omnilife.Controller')
const { verifyToken } = require('@middlewares/token')
const verifyUserRole = require('@middlewares/verifyUserRole')

// Roles requeridos para crear productos
const rolesRequiredToCreateProducts = verifyUserRole([
  'Administrador',
  'Gerente',
  'Moderador',
])

// Obtener todos los productos
router.get('/omnilife', Omnilife.getAllProducts)
// Crear nuevo producto
router.post('/omnilife', [verifyToken, rolesRequiredToCreateProducts], Omnilife.createProduct)
// Eliminar producto
router.delete('/omnilife/:product', [verifyToken, rolesRequiredToCreateProducts], Omnilife.deleteProduct)

module.exports = router
