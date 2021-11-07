// Controllers
const UserAdminController = require('@controllers/admin/UserAdmin.Controller')

// Librarys
const { Router } = require('express')
const router = Router()

router.get('/count', UserAdminController.count)

module.exports = router
