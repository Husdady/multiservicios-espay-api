'use strict'

// Cargar esquema de mongoose
const { Schema, mongoose } = require('@database/connection')

// Creamos el objeto del esquema y sus atributos
const createCategorySchema = function (schema) {
  const { collectionName, modelName } = schema
  const CategorySchema = new Schema(
    {
      name: { type: String, unique: true, required: true },
    },
    {
      versionKey: false,
      timestamps: false,
      collection: collectionName,
    },
  )
  return mongoose.model(modelName, CategorySchema)
}

// Crear esquema de los categorías de los Productos Omnilife
const SeytuCategories = createCategorySchema({
  modelName: "SeytuCategories",
  collectionName: "seytu.products.categories",
})

// Crear esquema de los categorías de los Productos Omnilife
const OmnilifeCategories = createCategorySchema({
  modelName: "OmnilifeCategories",
  collectionName: "omnilife.products.categories",
})

// Exportar esquema
module.exports = { SeytuCategories, OmnilifeCategories }
