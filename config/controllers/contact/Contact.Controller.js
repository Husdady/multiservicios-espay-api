// Models
const Contact = require('@models/contact')

// Utils
const cloudinary = require('@utils/cloudinary')

// Comprobar si existe un usuario administrador
async function updateContactInformation(req, res, next) {
  try {
    const {
      fullname,
      aboutMe,
      testimony,
      phone,
      omnilifeCode,
      emails,
      socialNetworks
    } = req.body

    // Si la información del usuario sigue siendo la misma
    if (!JSON.parse(req.body.formHasBeenEdited)) {
      throw new Error('La información no ha sido actualizada, por favor actualice sus datos por otros que no sean iguales a los actuales')
    }

    // Nueva información del usuario
    const newContactData = {
      fullname: fullname,
      aboutMe: aboutMe,
      testimony: testimony,
      phone: phone,
      omnilifeCode: omnilifeCode,
      emails: JSON.parse(emails),
      socialNetworks: JSON.parse(socialNetworks),
    }

    // Obtener el nombre del contacto
    const author = fullname.toLowerCase()

    if (req.body.contactPhotoName === 'null') {

      // Eliminar imagen de Cloudinary
      await cloudinary.v2.uploader.destroy(`contact-${author}`)

      // Eliminar foto de contacto de la DB
      Object.assign(newContactData, {
        contactPhoto: null
      })
    }

    const existContactInformation = await Contact.exists({})

    // Si ya existe la información de contacto
    if (existContactInformation) {
      // Actualizar información
      await Contact.findOneAndUpdate({}, newContactData)
    } else {
      // Crear contacto
      const contact = new Contact(newContactData)

      // Guardar contacto
      await contact.save()
    }

    // Mensaje existoso
    const successMessage = {
      message: "Se actualizó exitosamente la información de contacto"
    }

    // Si existe una imagen como archivo
    if (req.file) {
      // Setear mensaje exitoso
      req.successMessage = successMessage

      // Continuar al siguiente middleware
      next()
    }

    // Retornar mensaje exitoso
    !req.file && res.status(200).json(successMessage)
  } catch (err) {
    return res.status(400).send({ error: err.message })
  }
}

module.exports = {
  updateContactInformation,
}
