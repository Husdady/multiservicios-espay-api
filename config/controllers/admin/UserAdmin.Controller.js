// Models
const { Admin } = require('@models/Admin')

// Utils

async function count(_, res) {
  try {
    const adminCount = await Admin.estimatedDocumentCount()

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
