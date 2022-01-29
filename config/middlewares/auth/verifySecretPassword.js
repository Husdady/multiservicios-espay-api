// Utils
const { Validations: { validateSecretPassword } } = require('@utils/Validations')

// Comprobar si existe la clave secreta
function verifySecretPassword(erroMessage) {
	return async (req, res, next) => {
		validateSecretPassword({
	    secret_password: req.headers.secret_password,
	    onDifferent: function() {
	      return res.status(401).json({
	        message: erroMessage
	      })
	    }
	  })

		// Continuar al siguiente middleware
		next();
	}
}

module.exports = verifySecretPassword;
