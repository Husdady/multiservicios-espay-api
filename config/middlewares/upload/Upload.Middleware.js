// Utils
const cloudinary = require('@utils/cloudinary')
const { isFunction } = require('@utils/Validations')

// Subir foto a Cloudinary
function uploadImage(settings) {
  return async (req, res) => {
    // Obtener ajustes
    const { path, Model, filename, cloudinary_folder, uploadError } = settings

    try {
      // Setear nombre de imagen subida a Cloudinary
      req.filename = isFunction(filename) ? filename(req.fileId) : filename

      // Subir imagen a Cloudinary
      await cloudinary.v2.uploader.upload(
        req.file.path,
        {
          folder: cloudinary_folder,
          public_id: req.filename,
        },
        async function (error, result) {
          try {
            // Si existe un error al subir la foto
            if (error) {
              throw new Error(uploadError)
            }

            let user
            const photo = {
              $set: {
                [path]: {
                  _id: result.asset_id,
                  url: result.secure_url,
                  size: result.bytes,
                  width: result.width,
                  height: result.height,
                  format: result.format,
                  created_at: result.created_at,
                },
              },
            }

            if (req.fileId) {
              // Actualizar foto por id
              user = await Model.findByIdAndUpdate(req.fileId, photo, { new: true })
            } else {
              // Actualizar foto por otro campo
              await Model.findOneAndUpdate({}, photo, { new: true })
            }

            // Obtener query condition
            const { returnUserData } = req.query

            // Si se debe obtener la información del usuario actualizada
            if (returnUserData && JSON.parse(returnUserData)) {
              return res.status(200).json({
                message: req.successMessage.message,
                profilePhoto: {
                  url: user?.settings?.avatar?.url,
                },
              })
            } else {
              // Retornar mensaje exitoso
              res.status(200).json(req.successMessage)
            }
          } catch (error) {
            console.log(error)
          }
        },
      )
    } catch (err) {
      console.log('[Cloudinary.uploadPhoto.ERROR]', err)
      res.status(400).send({ error: err.message })
    }
  }
}

async function uploadImageToCloudinary({ file, config, errorMessage }) {
  return new Promise((resolve) => {
    cloudinary.v2.uploader.upload(file, config, (err, res) => {
      if (err) return res.status(500).send(errorMessage)
      resolve({
        _id: res.asset_id,
        url: res.secure_url,
        size: res.bytes,
        width: res.width,
        height: res.height,
        format: res.format,
        created_at: res.created_at,
      })
    })
  })
}

// Subir foto a Cloudinary
function uploadMultipleImages(settings) {
  return async (req, res) => {
    try {
      // Obtener ajustes
      const { filename, cloudinary_folder, onSuccess } = settings

      // Setear nombre de imagen subida a Cloudinary
      req.filename = isFunction(filename) ? filename(req.fileId) : filename

      // Setear folder de Cloudinary
      const folder = isFunction(cloudinary_folder) ? cloudinary_folder(req.item) : cloudinary_folder

      const images = []

      // Obtener imágnes
      const files = req.files

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const index = ("0" + (i + 1)).slice(-2) + "-";

        const newImage = await uploadImageToCloudinary({
          file: file.path,
          errorMessage: settings.errorMessage,
          config: {
            folder: folder,
            public_id: index + req.filename,
          }
        })

        images.push(newImage)
      }

      if (isFunction(onSuccess)) {
        await onSuccess({ images: images, itemId: req.item._id })
      }

      // Retornar mensaje exitoso
      res.status(200).json(req.successMessage)
    } catch (error) {
      res.status(400).send({ error: error.message })
    }
  }
}

// Eliminar foto alojada en Cloudinary
function deleteImage({ cloudinary_path }) {
  return async (req, res) => {
    try {
      // Eliminar imagen de Cloudinary
      cloudinary.v2.uploader.destroy(`${cloudinary_path}-${req.fileId}`, function (error, result) {
        console.log('[deleteImageFromCloudinary.error]', error)
        console.log('[deleteImageFromCloudinary.result]', result)
      })

      res.status(204).json({})
    } catch (err) {
      console.log('[deletePhoto.error]', err)
    }
  }
}

module.exports = {
  uploadImage,
  uploadMultipleImages,
  deleteImage,
}
