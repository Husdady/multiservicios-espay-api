// Models
// const { User } = require('@models/User')
const { Admin, structure } = require('@models/Admin')

// Utils
const { validateRequest, encryptPassword, createToken } = require('@utils/Helper')
const adminPermissions = require('@utils/permissions/admin-permissions')

async function createAdmin(req, res) {
  try {
    if (req.body.secret_password !== process.env.SECRET_PASSWORD) {
      throw new Error('You do not have permissions to create an administrator user')
    }

    validateRequest({ request: req, modelStructure: structure })

    const { fullname, email, password } = req.body
    const adminCount = await Admin.estimatedDocumentCount()

    if (adminCount > 0) throw new Error('Administrator user already exists!')

    const adminRole = {
      name: 'Administrador',
      permissions: adminPermissions,
    }

    const newAdmin = new Admin({
      fullname: fullname,
      email: email,
      password: await encryptPassword(password),
      role: adminRole,
      verifiedEmail: false
    })

    await newAdmin.save()

    // const token = createToken({ config: { id: newAdmin._id } })
    createToken({ config: { id: newAdmin._id } })
    return res.status(200).json({
      message: 'A new administrator user has been created.',
      // access_token: token,
    })
  } catch (error) {
    return res.status(400).send({ error: error.message })
  }
}

async function signIn(req, res) {
  try {
    const { email, password } = req.body
    const userFound = await Admin.findOne({ email }).populate("roles")

    if (!userFound) throw new Error("User not found!") 

    const matchPassword = await comparePassword(password, userFound.password)

    if (!matchPassword) throw new Error("Invalid password!")

    const token = createToken({ config: { id: userFound._id } })
    return res.status(200).json({ access_token: token })
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
}

module.exports = {
  createAdmin,
  signIn
}
