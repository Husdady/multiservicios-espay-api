// Models
const User = require('@models/users/User')
const Role = require('@models/users/Role')
const Admin = require('@models/users/Admin')

// Utils
const cloudinary = require('@utils/cloudinary')
const { isString, isFunction, isEmptyArray } = require('@utils/Validations')
const { comparePassword, encryptPassword } = require('@utils/Helper')

// Editar un usuario por id
function editUser(messages) {
  return async (req, res, next) => {
    try {
      // Obtener datos del body
      const { fullname, email, role, profilePhotoName } = req.body

      // Encontrar si ya existe un admin con ese correo electrónico
      const existAdminWithThatEmail = await Admin.exists({ email })

      // Comprobar si el correo ingresado, no es igual al del admin
      if (existAdminWithThatEmail) {
        throw new Error('Ya existe un usuario registrado con ese correo electrónico')
      }

      // Obtener id de usuario
      const { userId } = req.params

      // Encontrar al usuario que se va a editar
      const existUser = await User.exists({ _id: userId })

      // Si el usuario no existe
      if (!existUser) {
        throw new Error(`No se ha encontrado al usuario ${fullname} para editar su información`)
      }

      // Si la información del usuario sigue siendo la misma
      if (!JSON.parse(req.body.formHasBeenEdited)) {
        throw new Error(messages.errors.userDataIsTheSame)
      }

      // Encontrar el rol del usuario
      const roleFound = await Role.findOne({ name: role })

      // Nueva información del usuario
      const newUserData = {
        fullname: fullname,
        email: email,
        role: roleFound.id,
      }

      if (profilePhotoName === 'null') {
        // Eliminar imagen de Cloudinary
        await cloudinary.v2.uploader.destroy(`users/user-${userId}`)

        // Eliminar foto de perfil del usuario de la DB
        Object.assign(newUserData, {
          settings: {
            avatar: null,
          },
        })
      }

      // Actualizar usuario
      await User.findByIdAndUpdate(userId, newUserData)

      // Mensaje existoso
      const successMessage = {
        message: isFunction(messages.successMessage)
          ? messages.successMessage(req.body)
          : isString(messages.successMessage)
          ? messages.successMessage
          : null,
      }

      // Setear id de usuario
      req.fileId = userId

      // Si existe una imagen como archivo
      if (req.file) {
        // Setear mensaje exitoso
        req.successMessage = successMessage

        // Continuar al siguiente middleware
        next()
      }

      // Retornar mensaje exitoso
      !req.file && res.status(200).json(successMessage)
    } catch (err) {
      if (err.codeName === 'DuplicateKey') {
        res.status(400).send({
          error: 'Ya existe un usuario registrado con ese correo electrónico'
        })
      } else {
        res.status(400).send({ error: err.message })
      }
    }
  }
}

// Eliminar un usuario por id
async function deleteUser(req, res, next) {
  try {
    let account = null
    // Obtener id del usuario
    const { userId } = req.params

    // Si se debe eliminar definitivamente la cuenta
    if (req.query.status === 'close account') {
      account = await User.findByIdAndDelete(userId)
    } else {
      // Se actualiza el usuario a usuario eliminado, su cuenta aún sigue estando disponible
      account = await User.findByIdAndUpdate(userId, {
        deleted: true,
        deletedAt: new Date().toISOString(),
      })
    }

    // Si el usuario tiene foto de perfil
    if (account?.settings?.avatar) {
      // Setear id del usuario
      req.fileId = account._id
      // Continuar al siguiente middleware
      next()
    } else {
      return res.status(204).json({})
    }
  } catch (err) {
    res.status(400).send({ error: err.message })
  }
}

// Restaurar un usuario por id
async function restoreUser(req, res) {
  try {
    const { userId } = req.params
    console.log('[restoreUser]', userId)
    // Si se debe eliminar definitivamente la cuenta
    await User.findByIdAndUpdate(userId, {
      deleted: false,
      $unset: { deletedAt: '' },
    })

    return res.status(204).json({})
  } catch (error) {
    console.log(error)
    res.status(400).send({ error: error.message })
  }
}

// Actualizar contraseña de usuario
async function changePassword(req, res) {
  try {
    const { password, newPassword } = req.body
    console.log(req.params)
    // Buscar un usuario
    const user = await User.findOne({ _id: req.params.userId }).select('password').lean()

    // Comparar contraseñas para comprobar si son iguales
    const matchPassword = await comparePassword(password, user.password)

    // Si la contraseña no es igual a la contraseña del usuario encontrado
    if (!matchPassword) {
      throw new Error('La contraseña que has ingresado, no coincide con la tuya')
    }

    // Si la nueva contraseña es igual a la actual contraseña del admin
    if (password === newPassword) {
      throw new Error('La nueva contraseña no debe ser igual a tu actual contraseña')
    }

    // Actualizar la contraseña del Administrador
    await User.findOneAndUpdate(
      { _id: user._id },
      {
        password: await encryptPassword(newPassword),
      },
    )

    return res.status(204).json({})
  } catch (err) {
    return res.status(400).send({ error: err.message })
  }
}

// Cerrar cuenta de usuario
async function closeMyAccount(req, res) {
  try {
    // Eliminar usuario
    const user = await User.findByIdAndDelete(req.params.userId)

    // Si el usuario tiene foto de perfil
    if (user?.settings?.avatar) {
      // Setear id del usuario
      req.fileId = user._id
      // Continuar al siguiente middleware
      next()
    } else {
      return res.status(204).json({})
    }
  } catch (err) {
    res.status(400).send({ error: err.message })
  }
}

module.exports = {
  editUser,
  deleteUser,
  restoreUser,
  changePassword,
  closeMyAccount,
}
