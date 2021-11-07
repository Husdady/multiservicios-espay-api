// Auth user
const user = require("@routes/api/auth/user")
const admin = require("@routes/api/auth/admin")

// User admin
const userAdmin = require("@routes/api/admin")

// Products
const productosSeytu = require("@routes/api/products/seytu");
const productosOmnilife = require("@routes/api/products/omnilife");

const products = [productosSeytu, productosOmnilife];

module.exports = function (app) {
  app.use("/api/auth/user/", user);
  app.use("/api/auth/admin/", admin);
  app.use("/api/admin/", userAdmin);
  app.use("/api/products/", products);
};