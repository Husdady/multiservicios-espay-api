// Models
const { createProductsSchema } = require("@models/Products");

// Crear esquema de los Productos Seytú
const OmnilifeProducts = createProductsSchema({
  modelName: "OmnilifeProducts",
  collectionName: "omnilife-products",
})

async function getAllProducts(_, res) {
  try {
    await OmnilifeProducts.find({});
    return res.json({ ga: 'ga' })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

async function createProduct(_, res) {
  try {
    await OmnilifeProducts.find({});
    return res.json({ ga: 'ga' })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

async function deleteProduct(_, res) {
  try {
    await OmnilifeProducts.find({});
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