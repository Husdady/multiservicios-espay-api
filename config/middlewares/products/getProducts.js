function getProducts(Model) {
  return async (req, res) => {
    try {
      const { pagination } = req.query

      // Activar paginación
      if (pagination && pagination === 'enabled') {
        return res.json({ pagination: true })
      }

      // Obtener todos los productos
      const products = await Model.find({})
      return res.json(products)
    } catch (error) {
      res.status(400).send({ error: error.message })
    }
  }
}

module.exports = getProducts
