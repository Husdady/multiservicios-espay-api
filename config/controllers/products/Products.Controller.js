// Middlewares
const createOrder = require("@middlewares/products/createOrder")
const editProduct = require("@middlewares/products/editProduct")
const updateImages = require("@middlewares/products/updateImages")
const createProduct = require("@middlewares/products/createProduct")
const deleteProduct = require("@middlewares/products/deleteProduct")

module.exports = {
	createOrder,
  editProduct,
  updateImages,
  createProduct,
  deleteProduct,
}
