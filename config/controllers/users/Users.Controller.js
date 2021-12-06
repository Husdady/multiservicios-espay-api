// Models
const User = require('@models/Users/User')

// Eliminar un usuario por id
async function deleteUser(req, res) {
  try {
    const { userId } = req.params
    const result = await User.findByIdAndDelete(userId)
    console.log('[deleteUser]', result)
    return res.status(204).json({})
  } catch (error) {
    console.log(error)
    res.status(400).send({ error: error.message })
  }
}

module.exports = {
  deleteUser,
}