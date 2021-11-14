// Middlewares
const getProducts = require("@middlewares/products/getProducts")
const createProduct = require("@middlewares/products/createProduct")
const deleteProduct = require("@middlewares/products/deleteProduct")

module.exports = {
  getProducts,
  createProduct,
  deleteProduct,
}
