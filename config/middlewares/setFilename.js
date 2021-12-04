function setFileNameToUserProfilePhoto(req, _, next) {
  req.filename = `user-${req.userId}`
  next()
}

module.exports = {
  setFileNameToUserProfilePhoto
}