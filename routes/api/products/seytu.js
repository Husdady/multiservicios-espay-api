const { Router } = require('express')
const router = Router()
const Seytu = require('@controllers/products/seytu/Seytu.Controller')
const { verifyToken } = require('@middlewares/token')
const verifyUserRole = require('@middlewares/verifyUserRole')

// Roles requeridos para crear productos
const rolesRequiredToCreateProducts = verifyUserRole([
  'Administrador',
  'Gerente',
  'Moderador',
])

// Obtener todos los productos
router.get('/seytu', Seytu.getAllProducts)
// Crear nuevo producto
router.post('/seytu', [verifyToken, rolesRequiredToCreateProducts], Seytu.createProduct)
// Eliminar producto
router.delete('/seytu/:product', [verifyToken, rolesRequiredToCreateProducts], Seytu.deleteProduct)

module.exports = router
