// Middlewares
const getProducts = require("@middlewares/Products/getProducts")
const createProduct = require("@middlewares/Products/createProduct")
const deleteProduct = require("@middlewares/Products/deleteProduct")

module.exports = {
  getProducts,
  createProduct,
  deleteProduct,
}
