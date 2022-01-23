// Utils
const {
  Validations: { validateSchema, validateSecretPassword },
} = require('@utils/Validations');

const SchemaProductCreation = {
  name: {
    type: String,
    required: "You must provide a field: 'name'",
  },
  content: {
    type: String,
    required: "'You must provide a field: 'content'",
  },
  usageMode: {
    type: String,
    required: "'You must provide a field: 'usageMode'",
  },
  description: {
    type: String,
    required: "'You must provide a field: 'description'",
  },
  emptyBody: "You need to provide the product fields: 'name', 'description', etc.",
}

const validateProductCreation = validateSchema(SchemaProductCreation)

// Crear un producto
function createProduct(Model) {
  return async (req, res, next) => {
    try {
      // Validar el body
      const body = validateProductCreation(req.body)
      // Si existen errores en el body, devolver errores
      if (body.error) throw new Error(body.error)

      // Comprobar si existe la clave secreta
      validateSecretPassword({
        secret_password: req.headers.secret_password,
        onDifferent: function () {
          return res.status(401).json({
            message: 'No tienes permisos para crear productos!',
          })
        },
      })

      // Destructurar 'req.body'
      const {
        name,
        description,
        price,
        stock,
        content,
        benefits,
        categories,
        usageMode
      } = req.body

      // Crear nuevo usuario
      const newProduct = new Model({
        title: name,
        content: content,
        usageMode: usageMode,
        description: description,
        price: JSON.parse(price),
        stock: JSON.parse(stock),
        benefits: JSON.parse(benefits),
        categories: JSON.parse(categories),
        initialName: name.toLowerCase().replace(/\s/gim, '-')
      })

      // Guardar producto
      await newProduct.save();

      // Obtener imágenes del producto
      const images = JSON.parse(req.body.images);

      // Pasar el producto creado al siguiente middleware
      req.item = newProduct;

      // Pasar las imágenes del producto al siguiente middleware
      req.images = images;

      // Mensaje existoso
      const successMessage = {
        message: 'Se ha creado un nuevo producto exitosamente!',
      }

      console.log('[images]', req.files)

      req.successMessage = successMessage

      // Continuar al siguiente middleware
      req.files && next()

      // Retornar mensaje exitoso
      !req.files && res.status(200).json(successMessage)
    } catch (error) {
      res.status(400).send({ error: error.message })
    }
  }
}

module.exports = createProduct
