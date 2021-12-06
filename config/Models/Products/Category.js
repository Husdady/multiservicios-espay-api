'use strict'

// Cargar esquema de mongoose
const { Schema, mongoose } = require('@database/connection')

// Creamos el objeto del esquema y sus atributosa
const CategorySchema = new Schema(
  {
    company: { type: String, required: true },
    categories: [
      {
        _id: {
          type: Schema.Types.ObjectId,
          index: true,
          required: true,
          auto: true,
        },
        name: {
          type: Object,
          required: true,
        },
      },
    ],
  },
  {
    versionKey: false,
    collection: 'categories',
  },
)

// Exportar esquema
module.exports = mongoose.model('Category', CategorySchema)
