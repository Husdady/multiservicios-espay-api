// Utils
const {
  Validations: { validateSchema },
} = require('@utils/Validations');

const SchemaProductCreation = {
  clientId: String,
  clientName: String,
  clientPhone: String,
  emptyBody: "You need to provide the order product fields: 'clientName', 'clientPhone', etc."
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

      // Destructurar 'req.body'
      const { clientId, clientName, clientPhone, products } = req.body

      // Mensaje existoso
      const successMessage = {
        message: 'Se ha realizado el pedido exitosamente, se enviará un mensaje de confirmación a tu Whatsapp',
      }

      const existOrder = await Model.exists({ clientId })

      if (existOrder) {
        await Model.updateMany({ clientId }, {
          $push: {
            products: products[0]
          }
        })

        // Retornar mensaje exitoso
        return res.status(200).json(successMessage)
      }

      // Crear nuevo pedido de un producto
      const newProductOrder = new Model({
        clientId,
        clientName,
        clientPhone,
        products
      })

      // Guardar pedido
      await newProductOrder.save();

      // Retornar mensaje exitoso
      res.status(200).json(successMessage)
    } catch (error) {
      res.status(400).send({ error: error.message })
    }
  }
}

module.exports = createOrder
