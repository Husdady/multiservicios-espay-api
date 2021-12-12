// Models
const User = require('@models/users/User')
const Role = require('@models/users/Role')
const Admin = require('@models/users/Admin')

// Utils
const cloudinary = require('@utils/cloudinary')

// Editar un usuario por id
async function editUser(req, res, next) {
  try {
    // Obtener datos del body
    const { fullname, email, role, userProfilePhoto } = req.body

    // Encontrar si ya existe un admin con ese correo electrónico
    const adminFound = await Admin.findOne({ email }, { _id: 0, email: 1 })

    // Si ya existe un usuario o admin con ese correo electrónico
    if (adminFound?.email === email) {
      throw new Error('Ya existe un usuario registrado con ese correo electrónico')
    }

    // Encontrar al usuario que se va a editar
    const user = await User.findById(req.body.id, { _id: 0, fullname: 1, email: 1, settings: { avatar: { url: 1 } } }).populate('role', { _id: 0, name: 1 })

    // Si el usuario no existe
    if (!user) {
      throw new Error(`No se ha encontrado al usuario ${fullname} para editar su información`)
    }
    
    const userInformationHasNotBeenEdited = user.fullname === fullname && user.email === email && user.role.name === role

    console.log('[body]', req.body)
 
    // Si la información del usuario sigue siendo la misma
    if (!JSON.parse(req.body.userInformationHasBeenEdited)) {
      throw new Error('La información del usuario es la misma, debe proporcionar nuevos datos')
    }

    // Encontrar un rol del usuario
    const roleFound = await Role.findOne({ name: role })

    // Nueva información del usuario
    const newDataUser = {
      fullname: fullname,
      email: email,
      role: roleFound.id
    }
    
    if (userProfilePhoto === 'null') {
      // Eliminar imagen de Cloudinary
      await cloudinary.v2.uploader.destroy(`users/user-${req.userId}`)

      // Eliminar imagen de la información del usuario
      Object.assign(newDataUser, {
        settings: {
          avatar: null
        }
      })
    }

    // Actualizar usuario
    await User.findByIdAndUpdate(req.params.userId, newDataUser)

    // Mensaje existoso
    const successMessage = {
      message: 'Se ha actualizado exitosamente la información de ' + fullname,
    }

    // Setear id de usuario
    req.userId = req.params.userId

    // Si existe una imagen como archivo
    if (req.file) {
      // Setear mensaje exitoso
      req.successMessage = successMessage

      // Continuar al siguiente middleware
      next()
    }

    // Retornar mensaje exitoso
    !req.file && res.status(200).json(successMessage)
  } catch (error) {
    if (error.codeName === 'DuplicateKey') {
      res.status(400).send({ error: 'Ya existe un usuario registrado con ese correo electrónico' })
    } else {
      res.status(400).send({ error: error.message })
    }
  }
}

// Eliminar un usuario por id
async function deleteUser(req, res, next) {
  try {
    const { userId } = req.params
    const result = await User.findByIdAndDelete(userId)
    console.log('[deleteUser]', result)

    // Si el usuario tiene foto de perfil
    if (result?.settings?.avatar) {
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
