// Models
const User = require('@models/User')
const cloudinary = require('@utils/cloudinary')

// Obtener todos los usuarios
async function getAllUsers(_, res) {
  try {
    const allUsers = await User.find({}).populate('role')
    console.log(allUsers)
    return res.json({ ga: 'ga' })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

// Subir foto de perfil de un usuario
async function uploadProfilePhoto(req, res) {
  try {
    console.log('[file]', req.file)

    // Subir imagen a Cloudinary
    await cloudinary.v2.uploader.upload(
      req.file.path,
      {
        folder: 'users',
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

    
    // User.findById(req.userId)

    if (req.userId) {
      // Retornar mensaje exitoso
      res.status(200).json({
        message: 'Se ha creado un nuevo usuario exitosamente!',
      })
    }
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

module.exports = {
  getAllUsers,
  uploadProfilePhoto,
}
