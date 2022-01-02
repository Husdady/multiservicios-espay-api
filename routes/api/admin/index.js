// Controllers
const AdminController = require('@controllers/admin/Admin.Controller')

// Librarys
const { Router } = require('express')
const router = Router()

// Middlewares
const { verifyToken } = require('@middlewares/auth/token')

// Verificar si existe un usuario administrador
router.get('/existAdmin', verifyToken, AdminController.existUserAdmin)

// Cambiar contraseña del usuario administrador
router.post('/change-my-password', verifyToken, AdminController.changePassword)

module.exports = router
