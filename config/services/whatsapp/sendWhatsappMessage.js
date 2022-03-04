// Librarys
const twilio = require('twilio');

// Twilio credentials
const accountSid = process.env.TWILIO_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

const client = new twilio(accountSid, authToken);

// Enviar mensaje de Whatsapp
async function sendWhatsappMessage(req, res, next) {
	try {
		await client.messages.create({
    	// from: "whatsapp:+51951871023",
    	from: '+15672323125',
    	body: "Not working",
    	to: "+51 951 971 023",
  	})

		// Continuar al siguiente middleware
    return next();
	} catch(e) {
		console.log(e)
    return res.status(400).json({ error: "A ocurrido un error al enviar el mensaje de confirmación a tu Whatsapp" })
	}
}

module.exports = sendWhatsappMessage