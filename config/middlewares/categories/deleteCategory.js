// Eliminar una categoría
function deleteCategory(Model, Company) {
  return async (req, res) => {
    try {
      const { categoryId } = req.params

      // Eliminar categoría
      await Model.findByIdAndDelete(categoryId)

      // Eliminar categoría en productos
      await Company.update(
        {
          categories: {
            $in: categoryId,
          },
        },
        {
          $pullAll: {
            categories: [categoryId],
          },
        },
        { multi: true },
      )

      // Retornar respuesta de servidor
      res.status(204).json({})
    } catch (err) {
      res.status(400).send({ error: err.message })
    }
  }
}

module.exports = deleteCategory
