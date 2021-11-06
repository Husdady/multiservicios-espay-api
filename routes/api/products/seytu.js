const { Router } = require("express");
const router = Router();
const { createProductsSchema } = require("@models/Products");

const SeytuProducts = createProductsSchema({
  modelName: "SeytuProducts",
  collectionName: "seytu-products",
})

router.get('/seytu', async (req, res) => {
  const result = await SeytuProducts.find({})
  return res.json(result)
})

router.get('/seytu/:product', async (req, res) => {
  const result = await SeytuProducts.find({})
  return res.json(result)
})

module.exports = router
