// Eliminar una categoría
function deleteCategory(Model, Company) {
  return async (req, res) => {
    try {
      const { categoryId } = req.params

      // Eliminar categoría
      await Model.findByIdAndDelete(categoryId)

      const filter = {
        categories: {
          $in: categoryId,
        },
      };

      const $pullAll = {
        $pullAll: {
          categories: [categoryId],
        },
      }

      const config = { multi: true }

      // Eliminar categoría en productos
      await Company.updateMany(filter, $pullAll, config)

      // Retornar respuesta de servidor
      return res.status(204).json({})
    } catch (err) {
      return res.status(400).send({ error: err.message })
    }
  }
}

module.exports = deleteCategory
