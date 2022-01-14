// Librarys
const { Router } = require('express')
const router = Router()

// Controllers
const { getProducts, createProduct, deleteProduct } = require('@controllers/products/Products.Controller')

// Middlewares
const { verifyToken } = require('@middlewares/auth/token')

// Models
const { OmnilifeProducts } = require("@models/products/Product");
const { OmnilifeCategories } = require("@models/products/Category");
const { createCategory, editCategory, deleteCategory } = require('@controllers/products/Categories.Controller');

// Roles requeridos para crear productos


const Omnilife = {
  getProducts: getProducts(OmnilifeProducts),
  createProduct: createProduct(OmnilifeProducts),
  deleteProduct: deleteProduct(OmnilifeProducts),
  createCategory: createCategory(OmnilifeCategories),
  editCategory: editCategory(OmnilifeCategories),
  deleteCategory: deleteCategory(OmnilifeCategories, OmnilifeProducts),
}

// Crear nueva categoría de los productos Omnilife
router.post('/categories/add', verifyToken, Omnilife.createCategory)

// Editar una categoría de los productos Omnilife
router.put('/categories/:categoryId', verifyToken, Omnilife.editCategory)

// Eliminar una categoría de los productos Omnilife
router.delete('/categories/:categoryId', verifyToken, Omnilife.deleteCategory)

module.exports = router
