const { Router } = require('express')
const router = Router()
const Testimonials = require('@controllers/testimonials/Testimonials.Controller')

router.get('/', Testimonials.getAllTestimonials)

module.exports = router
