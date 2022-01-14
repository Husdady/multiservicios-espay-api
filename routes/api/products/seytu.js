// Librarys
const { Router } = require('express')
const router = Router()

// Controllers
const { getProducts, createProduct, deleteProduct } = require('@controllers/products/Products.Controller')

// Controllers
const { createCategory, editCategory, deleteCategory } = require('@controllers/products/Categories.Controller');

// Models
const { SeytuProducts } = require("@models/products/Product");
const { SeytuCategories } = require("@models/products/Category");

// Middlewares
const { verifyToken } = require('@middlewares/auth/token')

// Roles requeridos para crear productos

const Seytu = {
  getProducts: getProducts(SeytuProducts),
  createProduct: createProduct(SeytuProducts),
  deleteProduct: deleteProduct(SeytuProducts),
  createCategory: createCategory(SeytuCategories),
  editCategory: editCategory(SeytuCategories),
  deleteCategory: deleteCategory(SeytuCategories, SeytuProducts),
}

// Crear nueva categoría de los productos Seytu
router.post('/categories/add', verifyToken, Seytu.createCategory)

// Editar una categoría de los productos Seytu
router.put('/categories/:categoryId', verifyToken, Seytu.editCategory)

// Eliminar una categoría de los productos Seytu
router.delete('/categories/:categoryId', verifyToken, Seytu.deleteCategory)

module.exports = router
