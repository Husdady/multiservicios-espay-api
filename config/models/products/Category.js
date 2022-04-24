'use strict'

const { Schema, mongoose } = require('@database/connection')

// Crear esquema del modelo
const CategorySchema = new Schema(
  {
    name: { type: String, unique: true, required: true }, // Nombre de la categoría
  },
  {
    versionKey: false,
    timestamps: false,
    collection: "categories",
  },
)

// Exportar modelo
module.exports = mongoose.model("Categories", CategorySchema)
