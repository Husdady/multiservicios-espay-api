// Models
const User = require('@models/Users/User')

// Utils
const cloudinary = require('@utils/cloudinary')

// Subir foto de perfil de un usuario
async function uploadProfilePhoto(req, res) {
  try {
    // Setear nombre de imagen subida a Cloudinary
    req.filename = `user-${req.userId}`
    console.log('[filename]', req.filename)
    // Subir imagen a Cloudinary
    await cloudinary.v2.uploader.upload(
      req.file.path,
      {
        folder: 'users',
        public_id: req.filename,
      },
      async function (error, result) {
        if (error) {
          throw new Error('Ha ocurrido un error al subir la foto de perfil')
        }
        await User.findByIdAndUpdate(req.userId, {
          settings: {
            avatar: {
              _id: result.asset_id,
              url: result.secure_url,
              size: result.bytes,
              created_at: result.created_at,
              format: result.format,
              width: result.width,
              height: result.height,
            },
          },
        })
      },
    )

    if (req.userId) {
      // Retornar mensaje exitoso
      res.status(200).json(req.successMessage)
    }
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

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

module.exports = {
  uploadProfilePhoto,
  deleteProfilePhoto,
}
