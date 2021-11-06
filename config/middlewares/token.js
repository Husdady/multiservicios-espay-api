const { verify } = require("jsonwebtoken");

async function verifyToken(req, res, next) {
  try {
    const token = res.headers["x-access-token"]
    if (!token) throw new Error("You do not have sufficient permissions") 
    const decodedToken = verify(token, process.env.JWT_SECRET)

    req.userId = decodedToken.id
    const user = await User.findById(req.userId, { password: 0 })
    if(!user) throw new Error("Not user found!")
    next();
    
  } catch (error) {
    return res.status(400).send({ error: error.message })
  }
}

module.exports = {
  verifyToken
}