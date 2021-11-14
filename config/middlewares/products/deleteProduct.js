function deleteProduct(model) {
  return async (req, res) => {
    try {
      await model.find({})
      return res.json({ ga: 'ga' })
    } catch (error) {
      res.status(400).send({ error: error.message })
    }
  }
}

module.exports = deleteProduct
