// Librarys
const { Router } = require("express");
const router = Router();

// Controllers
const UserController = require("@controllers/auth/User.Controller");

// Middlewares
const { verifyToken } = require('@middlewares/token')
const verifyUserRole = require('@middlewares/verifyUserRole')

// Roles requeridos para crear productos
const rolesRequiredToCreateUsers = verifyUserRole([
  'Administrador'
])

router.post(
  "/signup",
  [verifyToken, rolesRequiredToCreateUsers],
  UserController.createUser
);

module.exports = router;
