'use strict'

// Cargar esquema de mongoose
const { Schema, mongoose } = require('@database/connection')

// Creamos el objeto del esquema y sus atributos
const TestimonialsSchema = new Schema(
  {
    author: {
      name: {
        type: String, require: true
      },
      avatar: {
        photo: Object,
        backgroundColor: String
      }
    },
    testimony: { type: String, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
    collection: 'testimonials',
  },
)

// Exportar esquema
module.exports = mongoose.model('Testimonials', TestimonialsSchema)
