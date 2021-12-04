const { Router } = require('express')
const router = Router()
const Users = require('@controllers/users/Users.Controller')

router.get('/', Users.getAllUsers)
router.post('/:userId/upload/profile/photo', Users.getAllUsers)
router.delete('/:userId/delete/account', Users.getAllUsers)
router.post('/:userId/edit', Users.getAllUsers)

module.exports = router
