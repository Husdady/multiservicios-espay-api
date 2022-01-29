// Utils
const {
  Validations: { validateSchema, validateSecretPassword },
} = require('@utils/Validations');

const SchemaProductCreation = {
  clientId: String,
  clientName: String,
  phone: String,
  emptyBody: "You need to provide the order product fields: 'clientName', 'phone', etc.",
}

const validateOrderCreation = validateSchema(SchemaProductCreation)

// Crear un pedido de un producto
function createOrder(Model) {
  return async (req, res, next) => {
    try {
      // Validar el body
      const body = validateOrderCreation(req.body)
      // Si existen errores en el body, devolver errores
      if (body.error) throw new Error(body.error)

      // Comprobar si existe la clave secreta
      validateSecretPassword({
        secret_password: req.headers.secret_password,
        onDifferent: function () {
          return res.status(401).json({
            message: 'No tienes permisos para realizar un pedido!',
          })
        },
      })

      // Destructurar 'req.body'
      const { clientId, clientName, phone, status, quantity, products } = req.body

      // Crear nuevo pedido de un producto
      const newProductOrder = new Model({
        clientId,
        clientName,
        phone,
        status,
        quantity,
        products
      })

      // Guardar pedido
      await newProductOrder.save();

      // Mensaje existoso
      const successMessage = {
        message: 'Se ha realizado el pedido exitosamente, se enviará un mensaje de confirmación a tu Whatsapp',
      }

      // Retornar mensaje exitoso
      res.status(200).json(successMessage)
    } catch (error) {
      res.status(400).send({ error: error.message })
    }
  }
}

module.exports = createOrder
