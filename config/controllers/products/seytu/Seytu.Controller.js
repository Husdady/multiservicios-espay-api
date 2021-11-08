// Models
const { createProductsSchema } = require("@models/Products");

// Crear esquema de los Productos Seytú
const SeytuProducts = createProductsSchema({
  modelName: "SeytuProducts",
  collectionName: "seytu-products",
})

async function getAllProducts(_, res) {
  try {
    await SeytuProducts.find({});
    return res.json({ ga: 'ga' })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

async function createProduct(_, res) {
  try {
    await SeytuProducts.find({});
    return res.json({ message: 'New product has been created' })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

async function deleteProduct(_, res) {
  try {
    await SeytuProducts.find({});
    return res.json({ ga: 'ga' })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

module.exports = {
  getAllProducts,
  createProduct,
  deleteProduct
}
