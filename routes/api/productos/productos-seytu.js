const { Router } = require("express");
const router = Router();
const { createProductsSchema } = require("@models/Products");

const SeytuProducts = createProductsSchema({
  modelName: "SeytuProducts",
  collectionName: "seytu-products",
})

router.get('/productos-seytu', async (req, res) => {
  const result = await SeytuProducts.find({})
  return res.json(result)
})

router.get('/productos-seytu/:product', async (req, res) => {
  const result = await SeytuProducts.find({})
  return res.json(result)
})

module.exports = router
