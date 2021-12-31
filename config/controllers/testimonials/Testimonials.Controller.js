// Models
const Testimony = require("@models/testimonials/Testimony")

const {
  Validations: { validateSchema, validateSecretPassword },
} = require('@utils/Validations')

// Reglas para crear un usuario
const SchemaTestimonyCreaction = {
  author: String,
  country: String,
  testimony: String,
  emptyBody: "You need to provide the user fields: 'author', 'age', etc.",
}

// Validar las reglas de un esquema
const validateTestimony = validateSchema(SchemaTestimonyCreaction)

async function createNewTestimony(req, res, next) {
  try {
    // Validar el body
    const body = validateTestimony(req.body)
    // Si existen errores en el body, devolver errores
    if (body.error) throw new Error(body.error)

    // Comprobar si existe la clave secreta
    validateSecretPassword({
      secret_password: req.headers.secret_password,
      onDifferent: function () {
        return res.status(401).json({
          message: 'You do not have permissions to create an testimony',
        })
      },
    })

    // Obtener datos del body
    const { author, age, country, testimony } = req.body

    // Verificar si ya existe un testimonio
    const existTestimony = await Testimony.exists({ 'author.name': author })

    if (existTestimony) throw new Error('¡Ya existe un autor con ese testimonio!')

    // Crear nuevo usuario
    const newTestimony = new Testimony({
      author: {
        name: author,
        age: age,
        country: country,
      },
      testimony: testimony
    })

    // Guardar usuario
    await newTestimony.save()

    // Pasar id del usuario al siguiente middleware
    req.fileId = newTestimony._id

    // Mensaje existoso
    const successMessage = {
      message: 'Se ha creado el testimonio exitosamente!',
    }

    req.successMessage = successMessage
    // Continuar al siguiente middleware
    req.file && next()

    // Retornar mensaje exitoso
    !req.file && res.status(200).json(successMessage)
  } catch (error) {
    return res.status(401).send({ error: error.message })
  }
}

module.exports = {
  createNewTestimony
}