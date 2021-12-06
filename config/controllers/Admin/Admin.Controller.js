// Models
const Admin = require('@models/Users/Admin')

async function existUserAdmin(_, res) {
  try {
    // Obtener el total de admins
    const adminCount = await Admin.estimatedDocumentCount()

    // Si el total de admins es mayor a 0
    if (adminCount > 0) {
      res.status(200).json({ existUserAdmin: true })
    } else {
      res.status(200).json({ existUserAdmin: false })
    }

  } catch (error) {
    return res.status(400).send({ error: error.message })
  }
}

module.exports = {
  existUserAdmin,
}
