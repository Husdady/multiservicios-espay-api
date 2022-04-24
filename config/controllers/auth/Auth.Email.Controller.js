// Models
const Users = require('@models/users/User')
const Admin = require('@models/users/Admin')

// Services
const sendEmail = require('@services/nodemailer/sendEmail')

// Utils
const { createToken } = require('@utils/Helper')
const { isEmptyArray } = require('@utils/Validations')

// Comprobar si existe el correo electrónico de un usuario
exports.verifyIfExistUserEmail = async function(req, res) {
	const { email } = req.body

	try {
		// Promesas
		const promises = [
      Users.exists({ email }),
      Admin.exists({ email }),
    ]

     // Ejecutar promesas
     const results = await Promise.all(promises)

     // Comprobar si existe el correo tanto en un usuario como en el usuario administrador
     const existUserEmail = results.some((el) => !!el)

     // Retornar comprobación
     return res.status(200).json({ existUserEmail })
	} catch(error) {
		return res.status(401).json({ error: error.message })
	}
}

// Enviar confirmación al correo electrónico de un usuario para confirmar su cuenta
exports.sendEmailConfirmation = async function(req, res) {
  const { userEmail } = req.params
  const fields = {
    email: 1,
    fullname: 1,
    emailConfirmationCode: 1,
    role: 1
  }

  try {
    // Promesas
    const promises = [
      Users.findOne({ email: userEmail }).populate('role').select(fields),
      Admin.findOne({ email: userEmail }).populate('role').select(fields),
    ]

    // Ejecutar promesas
    const users = await Promise.all(promises)

    // Encontrar a un usuario por email
    const userFound = users.find(user => !!(user))
    
    // Si no existe un usuario encontrado
    if (!userFound) {
      throw new Error(`No se ha encontrado el usuario con el correo electrónico ${userEmail}`)
    }

    // Crear token de confirmación de correo electrónico de usuario administrador
    const confirmationCode = createToken({
      exp: 3600,
      secretType: 'emailConfirmation',
      data: { id: userFound._id },
    })

    // Setear el código de confirmación al usuario
    userFound.emailConfirmationCode = confirmationCode

    await userFound.save()

    const accountType = userFound.role.name === 'Administrador' ? 'admin' : 'user'

    // Enviar confirmación de correo electrónico
    await sendEmail({
      confirmationCode: `?accountType=${accountType}&email=${userEmail}&confirmationCode=${confirmationCode}`,
      user: {
        email: userFound.email,
        fullname: userFound.fullname,
      },
    })

    return res.status(200).json({ message: `Se ha enviado correctamente la confirmación al correo electrónico: ${userFound.email}` })
  } catch(error) {
    return res.status(401).json({ error: error.message })
  }
}
