// Utils
const cloudinary = require('@utils/cloudinary')
const { isFunction } = require('@utils/Validations')

async function deleteProfilePhoto(req, res) {
  try {
    console.log('[deleteProfilePhoto]', `user-${req.userId}`)
    // Eliminar imagen de Cloudinary
    cloudinary.v2.uploader.destroy(`users/user-${req.userId}`, function (error, result) {
      console.log('[deleteImageFromCloudinary.error]', error)
      console.log('[deleteImageFromCloudinary.result]', result)
    })

    res.status(204).json({})
  } catch (error) {
    console.log(error)
  }
}

// Subir foto a Cloudinary
function uploadPhoto(settings) {
  return async (req, res) => {
    // Obtener ajustes
    const { path, Model, filename, cloudinary_folder, uploadError } = settings

    try {
      // Setear nombre de imagen subida a Cloudinary
      req.filename = isFunction(filename) && filename(req.fileId)

      // Subir imagen a Cloudinary
      await cloudinary.v2.uploader.upload(
        req.file.path,
        {
          folder: cloudinary_folder,
          public_id: req.filename,
        },
        async function (error, result) {
          // Si existe un error al subir la foto
          if (error) {
            throw new Error(uploadError)
          }

          await Model.findByIdAndUpdate(req.fileId, {
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
          })
        },
      )

      if (req.fileId) {
        // Retornar mensaje exitoso
        res.status(200).json(req.successMessage)
      }
    } catch (err) {
      res.status(400).send({ error: err.message })
    }
  }
}

// Eliminar foto alojada en Cloudinary
function deletePhoto({ cloudinary_path }) {
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
  uploadPhoto,
  deletePhoto,
  deleteProfilePhoto,
}
