// Models
const User = require('@models/Users/User')
const Role = require('@models/Users/Role')
const Admin = require('@models/Users/Admin')

// Editar un usuario por id
async function editUser(req, res, next) {
  try {
    // Obtener datos del body
    const { fullname, email, role, profilePhoto } = req.body

    // Encontrar al usuario que se va a editar su información
    // const userFound = await User.findOne({ email }, { _id: 0, fullname: 1, email: 1, role: 1, settings: { avatar: { url: 1 } } }).populate('role', { _id: 0, name: 1 })

    // Encontrar si ya existe un admin con ese correo electrónico
    const adminFound = await Admin.findOne({ email }, { email: 1 })

    // Encontrar si ya existe un usuario con ese correo electrónico
    const userFound = await User.findById(req.body.id, { fullname: 1, email: 1, settings: { avatar: { url: 1 } } }).populate('role', { name: 1 })

    console.log('[Edit.user]', userFound)
    console.log('[Edit.admin]', adminFound)
    if (adminFound.email === email || userFound._id !== req.body.id) {
      throw new Error('Ya existe un usuario registrado con ese correo electrónico')
    }

    // Si el usuario no existe
    if (!userFound) {
      throw new Error(`No se ha encontrado al usuario ${fullname} para editar su información`)
    }
    
    // Si la información del usuario sigue siendo la misma
    const userInformationHasNotBeenEdited = (userFound.fullname === fullname) && (userFound.email === email) && (userFound.role.name === role) && (userFound?.settings?.avatar?.url == profilePhoto)

    // Retornar error
    if (userInformationHasNotBeenEdited) {
      throw new Error(`La información del usuario es la misma, debe proporcionar nuevos datos`)
    }

    // Encontrar un rol del usuario
    const roleFound = await Role.findOne({ name: role })

    // Actualizar usuario
    await User.findByIdAndUpdate(req.params.userId, {
      fullname: fullname,
      email: email,
      role: roleFound.id,
    })

    // Mensaje existoso
    const successMessage = {
      message: 'Se ha actualizado exitosamente la información de ' + fullname,
    }

    if (req.file) {
      // Setear id de usuario actualizado
      req.userId = req.params.userId

      // Setear mensaje exitoso
      req.createNewUser = {
        successMessage,
      }

      // Continuar al siguiente middleware
      next()
    }

    // Retornar mensaje exitoso
    !req.file && res.status(200).json(successMessage)
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

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
    res.status(400).send({ error: error.message })
  }
}

module.exports = {
  editUser,
  deleteUser,
}
