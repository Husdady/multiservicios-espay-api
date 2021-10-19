const { Router } = require("express");
const router = Router();
const OmnilifeProduct = require("@models/products/OmnilifeProducts")

router.get('/', async (req, res) => {
  const result = await OmnilifeProduct.find({})
  console.log(result)
  return res.json(result)
})

module.exports = router
