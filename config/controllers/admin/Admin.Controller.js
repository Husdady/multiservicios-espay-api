// Models
const Admin = require('@models/users/Admin')

// Utils
const { comparePassword, encryptPassword } = require('@utils/Helper')

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
  } catch (err) {
    return res.status(400).send({ error: err.message })
  }
}

async function changePassword(req, res) {
  try {
    const { password, newPassword } = req.body

    // Seleccionar al usuario admin
    const admin = await Admin.findOne({}).select('password').lean()

    // Comparar contraseñas para comprobar si son iguales
    const matchPassword = await comparePassword(password, admin.password)

    // Si la contraseña no es igual a la contraseña del admin
    if (!matchPassword) {
      throw new Error('La contraseña que has ingresado, no coincide con la tuya')
    }

    // Si la nueva contraseña es igual a la actual contraseña del admin
    if (password === newPassword) {
      throw new Error('La nueva contraseña no debe ser igual a tu actual contraseña')
    }

    // Actualizar la contraseña del Administrador
    await Admin.findOneAndUpdate({}, {
      password: await encryptPassword(newPassword)
    })

    return res.status(204).json({})
  } catch (err) {
    return res.status(400).send({ error: err.message })
  }
}

module.exports = {
  existUserAdmin,
  changePassword,
}
