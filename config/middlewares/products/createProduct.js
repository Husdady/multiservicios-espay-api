// Utils
const { Validations: { validateSchema } } = require("@utils/Validations");

const SchemaProductCreation = {
  title: {
    type: String,
    required: "You must provide a field: 'title'"
  },
  description: {
    type: String,
    required: "'You must provide a field: 'description'"
  },
  emptyBody: {
    message: "You need to provide the product fields: 'title', 'description', etc."
  }
}

const validateProductCreation = validateSchema(SchemaProductCreation)

// Crear un producto
function createProduct(Model) {
  return async (req, res) => {
    try {
      // Validar el body
      const body = validateProductCreation(req.body)
      // Si existen errores en el body, devolver errores
      if (body.error) throw new Error(body.error)
      // const { title, description, defaultImage, images, benefits, stock } = req.body
      // const newProduct = new Model({
        // title, description, defaultImage, images, benefits, stock
      // })
      // await newProduct.save()
      return res.json({ message: 'A new product has been created!' })
    } catch (error) {
      res.status(400).send({ error: error.message })
    }
  }
}

module.exports = createProduct

