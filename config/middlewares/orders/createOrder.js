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
module.exports = function createOrder(Model) {
  return async (req, res) => {
    try {
      // Validar el body
      const body = validateOrderCreation(req.body)
      // Si existen errores en el body, devolver errores
      if (body.error) throw new Error(body.error)

      const { clientId, clientName, clientPhone, clientProduct } = req.body;

      // Mensaje existoso
      const successMessage = {
        message: 'Se ha realizado el pedido exitosamente, se enviará un mensaje de confirmación a tu Whatsapp'
      };

      const existClient = await Model.exists({ clientId })

      // Si ya existe un cliente que haya realizado un pedido
      if (existClient) {
        // Filtros
        const filter = {
          clientId: clientId,
          "clientProducts.product": {
            $ne: clientProduct.product
          }
        }

        // Nueva información
        const update = {
          $push: {
            clientProducts: clientProduct
          }
        }

        // Configuración extra
        const extraConfig = { new: true, upsert: true }

        await Model.updateOne(filter, update, extraConfig).lean()

        // Retornar mensaje exitoso
        return res.status(200).json(successMessage)
      }

      // Crear nuevo pedido de un producto
      const newProductOrder = new Model({
        clientId: clientId,
        clientName: clientName,
        clientPhone: clientPhone,
        clientProducts: [clientProduct],
      })

      // Guardar pedido
      await newProductOrder.save();

      // Retornar mensaje exitoso
      return res.status(200).json(successMessage)
    } catch (error) {
      // Si es un error de duplicado
      if (error.name === 'MongoServerError' && error.code === 11000) {
        const productName = req.body.clientProduct.name;

        return res.status(400).send({ 
          duplicateError: `Ya existe el producto "${productName}" en tu historial de pedidos`
        })
      }

      // Retornar mensaje de error
      return res.status(400).json({ error: error.message })
    }
  }
}