// Librarys
const { Router } = require("express");
const router = Router();

// Controllers
const UserController = require("@controllers/auth/User.Controller");

// Middlewares
const { verifyToken } = require('@middlewares/token')
const verifyPermission = require('@middlewares/verifyPermission')

// Verificar un permiso
const permissionRequiredToCreateUsers = verifyPermission({
  permission: "createUsers",
  action: "crear usuarios"
})

router.post(
  "/signup",
  [verifyToken, permissionRequiredToCreateUsers],
  UserController.createUser
);

module.exports = router;
