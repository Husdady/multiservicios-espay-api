"use strict";

const { Router } = require("express");
const router = Router();
const { createProductsSchema } = require("@models/Products");

const OmnilifeProducts = createProductsSchema({
  modelName: "OmnilifeProducts",
  collectionName: "omnilife-products",
})

router.get('/productos-omnilife', async (req, res) => {
  const result = await OmnilifeProducts.find({})
  return res.json(result)
})

router.get('/productos-omnilife/:product', async (req, res) => {
  const result = await OmnilifeProducts.findOne({})
  return res.json(result)
})

module.exports = router
