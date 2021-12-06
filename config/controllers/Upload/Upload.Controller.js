// Models
const User = require('@models/Users/User')
const cloudinary = require('@utils/cloudinary')

// Subir foto de perfil de un usuario
async function uploadProfilePhoto(req, res) {
  try {
    // Subir imagen a Cloudinary
    await cloudinary.v2.uploader.upload(
      req.file.path,
      {
        folder: 'users',
        public_id: req.filename
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
              height: result.height
            }
          }
        })
      },
    )

    if (req.userId) {
      // Retornar mensaje exitoso
      res.status(200).json(req.createNewUser.successMessage)
    }
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

module.exports = {
  uploadProfilePhoto,
}