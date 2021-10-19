const { Router } = require("express");
const router = Router();
const OmnilifeProduct = require("@models/products/OmnilifeProducts")

router.get('/', async (req, res) => {
  const result = await OmnilifeProduct.find({})
  console.log(result)
  return res.json(result)
})

router.get('/productos-omnilife', async (req, res) => {
  const result = await OmnilifeProduct.find({})
  console.log(result)
  return res.json(result)
})

router.get('/productos-seytu', async (req, res) => {
  const result = await OmnilifeProduct.find({})
  console.log(result)
  return res.json(result)
})

router.get('/contacto', async (req, res) => {
  const result = await OmnilifeProduct.find({})
  console.log(result)
  return res.json(result)
})

module.exports = router
