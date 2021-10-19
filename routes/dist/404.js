const { Router } = require("express");
const router = Router();

router.get('/', async (req, res) => {
  return res.json({
    error: "not found page"
  })
})

module.exports = router
