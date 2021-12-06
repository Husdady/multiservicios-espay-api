// Models
const User = require('@models/Users/User')

// Eliminar un usuario por id
async function deleteUser(req, res, next) {
  try {
    const { userId } = req.params
    const result = await User.findByIdAndDelete(userId)
    console.log('[deleteUser]', result)

    // Si el usuario tiene foto de perfil
    if (result.settings.avatar) {
      // Setear foto de perfil
      req.userId = result._id
      // Continuar al siguiente middleware
      next()
    } else {
      return res.status(204).json({})
    }
  } catch (error) {
    console.log(error)
    res.status(400).send({ error: error.message })
  }
}

module.exports = {
  deleteUser,
}