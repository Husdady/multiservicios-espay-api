// Models
const Role = require("@models/Role");
const { Admin } = require("@models/Admin");
const { User, structure } = require("@models/User");

// Utils
const { validateRequest, encryptPassword, createToken } = require("@utils/Helper");

async function createUser(req, res) {
  try {
    
    validateRequest({ request: req, modelStructure: structure });
    
    const { fullname, email, password, role } = req.body;

    const existEmail = await Promise.all([
      await Admin.findOne({ email }),
      await User.findOne({ email })
    ])

    if (existEmail[0] || existEmail[1]) throw new Error("Already exists a user with that email!")

    const newUser = new User({
      fullname: fullname,
      email: email,
      password: await encryptPassword(password),
      verifiedEmail: false
    });

    if (role) {
      const foundRole = await Role.findOne({ name: role })
      newUser.role = foundRole._id
    } else {
      const userRole = await Role.findOne({ name: "Usuario" })
      newUser.role = userRole._id
    }

    await newUser.save();

    const token = createToken({ config: { id: newUser._id } })
    return res.status(200).json({
      message: "A new user has been created.",
      access_token: token,
    });

  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
}

module.exports = {
  createUser
};
