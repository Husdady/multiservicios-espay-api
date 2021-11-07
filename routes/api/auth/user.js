// Controllers
const UserController = require("@controllers/auth/User.Controller");

// Librarys
const { body } = require("express-validator");
const { Router } = require("express");
const router = Router();

router.post(
  "/signup",
  body("fullname").isString(),
  body("email").isEmail(),
  body("password").isString(),
  UserController.createUser
);

module.exports = router;
