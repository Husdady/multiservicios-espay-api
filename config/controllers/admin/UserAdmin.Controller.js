// Models
const Admin = require('@models/Admin')

async function count(_, res) {
  try {
    // Obtener el total de admins
    const adminCount = await Admin.estimatedDocumentCount()

    // Si el total de admins es mayor a 0
    if (adminCount > 0) {
      res.status(200).json({ count: adminCount, existUserAdmin: true })
    } else {
      res.status(200).json({ count: 0, existUserAdmin: false })
    }

  } catch (error) {
    return res.status(400).send({ error: error.message })
  }
}

module.exports = {
  count,
}
