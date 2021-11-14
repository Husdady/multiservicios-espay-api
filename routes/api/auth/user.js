// Controllers
const UserController = require("@controllers/auth/User.Controller");

// Librarys
const { Router } = require("express");
const router = Router();

router.post(
  "/signup",
  UserController.createUser
);

module.exports = router;
