// Controllers
const AdminController = require('@controllers/Admin/Admin.Controller')

// Librarys
const { Router } = require('express')
const router = Router()

router.get('/existAdmin', AdminController.existUserAdmin)

module.exports = router
