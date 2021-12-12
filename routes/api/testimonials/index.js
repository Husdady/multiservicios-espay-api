const { Router } = require('express')
const router = Router()
const Testimonials = require('@controllers/testimonials/Testimonials.Controller')

router.get('/testimonials', Testimonials.getAllTestimonials)

module.exports = router
