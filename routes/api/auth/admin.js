// Controllers
const AdminController = require("@controllers/auth/Admin.Controller");

// Librarys
const { body } = require("express-validator");
const { Router } = require("express");
const router = Router();

router.post(
  "/signup",
  body("fullname").isString(),
  body("email").isEmail(),
  body("password").isString(),
  AdminController.createAdmin
);

module.exports = router;
