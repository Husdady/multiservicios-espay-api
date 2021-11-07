// Models
const { User } = require("@models/User")

async function getAllUsers(_, res) {
  try {
    const allUsers = await User.find({}).populate('role');
    console.log(allUsers)
    return res.json({ ga: 'ga' })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

module.exports = {
  getAllUsers
}