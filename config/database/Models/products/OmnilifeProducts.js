'use strict'

// Cargar esquema de mongoose
const { Schema, mongoose } = require('@database/connection')

// Creamos el objeto del esquema y sus atributos
const OmnilifeProductSchema = new Schema(
  {
    title: { type: String, require: true },
    description: { type: String, require: true }
  },
  {
    versionKey: false,
    timestamps: true,
    collection: 'omnilifeProducts',
  },
)

// Exportar esquema
module.exports = mongoose.model('OmnilifeProduct', OmnilifeProductSchema)
