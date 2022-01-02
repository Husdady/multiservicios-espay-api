// Models
const Testimony = require('@models/testimonials/Testimony')

// Utils
const cloudinary = require('@utils/cloudinary')
const { Validations: { validateSchema, validateSecretPassword } } = require('@utils/Validations')


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
        short_name: author.replace(/\s/gim, '-'),
        age: age,
        country: country,
      },
      testimony: testimony,
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

async function editTestimony(req, res, next) {
  try {
    // Setear id de autor de testimonio
    const testimonyId = req.params.testimonyId

    // Obtener datos del body
    const { author, age, country, testimony, authorPhotoName } = req.body

    // Encontrar si ya existe un autor con ese nombre
    const testimonyFound = await Testimony.findOne({ _id: testimonyId }, { _id: 1 })

    // Si ya existe un autor con un nombre repetido
    if (testimonyFound._id !== testimonyId) {
      throw new Error('Ya existe un autor registrado con ese nombre!')
    }

    // Si la información del autor sigue siendo la misma
    if (!JSON.parse(req.body.formHasBeenEdited)) {
      throw new Error('La información del autor es la misma, debe proporcionar nuevos datos')
    }

    // Nueva información del usuario
    const newDataAuthor = {
      author: {
        name: author,
        short_name: author.replace(/\s/gim, '-'),
        age: age,
        country: country,
      },
      testimony: testimony,
    }

    if (authorPhotoName === 'null') {
      // Eliminar imagen de Cloudinary
      await cloudinary.v2.uploader.destroy(`testimonials/testimony-${testimonyId}`)
      // Eliminar foto de autor de la DB
      Object.assign(newDataAuthor.author, {
        photo: null,
      })
    }

    // Actualizar usuario
    await Testimony.findByIdAndUpdate(testimonyId, { $set: newDataAuthor })

    // Mensaje existoso
    const successMessage = {
      message: 'Se ha actualizado exitosamente la información de ' + author,
    }

    // Setear id de usuario
    req.fileId = testimonyId

    // Si existe una imagen como archivo
    if (req.file) {
      // Setear mensaje exitoso
      req.successMessage = successMessage

      // Continuar al siguiente middleware
      next()
    }

    // Retornar mensaje exitoso
    !req.file && res.status(200).json(successMessage)
  } catch (error) {
    if (error.codeName === 'DuplicateKey') {
      res.status(400).send({ error: 'Ya existe un autor registrado con ese nombre. Intente con otro' })
    } else {
      res.status(400).send({ error: error.message })
    }
  }
}

// Eliminar un usuario por id
async function deleteTestimony(req, res, next) {
  try {
    console.log(req.params)
    // Eliminar el testimonio de un autor
    const testimony = await Testimony.findByIdAndDelete(req.params.testimonyId)

    // Si el usuario tiene foto de perfil
    if (testimony.author?.photo) {
      // Setear id del usuario
      req.fileId = testimony._id
      // Continuar al siguiente middleware
      next()
    } else {
      console.log(req.params)
      return res.status(204).json({})
    }
  } catch (err) {
    console.log(req.params)
    res.status(400).send({ error: err.message })
  }
}

module.exports = {
  editTestimony,
  deleteTestimony,
  createNewTestimony,
}
