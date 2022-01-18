"use strict";

// Cargar esquema de mongoose
const { Schema, mongoose } = require("@database/connection");

// Creamos el objeto del esquema y sus atributos
const createProductSchema = function (schema) {
  const { collectionName, modelName, categoryModel } = schema;
  const ProductSchema = new Schema(
    {
      defaultImage: Object,
      images: [{ type: Object }],
      title: { type: String, require: true },
      price: { type: Number, require: true },
      description: { type: String, require: true },
      content: {
        type: String,
        minLength: 25,
        maxLength: 100
      },
      stock: { type: Number, require: true },
      benefits: [
        {
          type: String,
          maxLength: 300
        }
      ],
      categories: [
        {
          ref: categoryModel,
          type: Schema.Types.ObjectId,
          require: true,
        }
      ],
      usageMode: {
        type: String,
        require: true,
        minLength: 50,
        maxLength: 200
      },
      totalVisits: { type: Number, default: 0 }
    },
    {
      versionKey: false,
      timestamps: true,
      collection: collectionName,
    }
  );
  return mongoose.model(modelName, ProductSchema);
};

// Crear esquema de los Productos Seytú
const SeytuProducts = createProductSchema({
  modelName: "SeytuProducts",
  categoryModel: "SeytuCategories",
  collectionName: "seytu.products",
})

// Crear esquema de los Productos Omnilife
const OmnilifeProducts = createProductSchema({
  modelName: "OmnilifeProducts",
  categoryModel: "OmnilifeCategories",
  collectionName: "omnilife.products",
})

// Exportar esquema
module.exports = { SeytuProducts, OmnilifeProducts };
