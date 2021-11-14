// Librarys
const { Router } = require("express");
const router = Router();

// Controllers
const AdminController = require("@controllers/auth/Admin.Controller");

router.post(
  "/signup",
  AdminController.createAdmin
);

module.exports = router;
