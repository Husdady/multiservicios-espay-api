function protectApiRoutes(req, res, next) {
  try {
    console.log('gaaaaaaaaaaaa')
    return res.json({
      message: 'Unauthorized!'
    })
  } catch (error) {
    return res.status(400).send({ error: error.message })
  }
}

module.exports = protectApiRoutes
