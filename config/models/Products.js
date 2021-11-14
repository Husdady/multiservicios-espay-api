"use strict";

// Cargar esquema de mongoose
const { Schema, mongoose } = require("@database/connection");

// Creamos el objeto del esquema y sus atributos
const createProductsSchema = function (schema) {
  const { collectionName, modelName } = schema;
  const ProductsSchema = new Schema(
    {
      title: { type: String, require: true },
      description: { type: String, require: true },
      defaultImage: {
        type: Object,
        require: true
      },
      images: [
        {
          image: Object
        }
      ],
      benefits: [
        {
          benefit: {
            type: String,
            maxLength: 300
          }
        }
      ],
      stock: Number,
      totalVisits: {
        type: Number,
        default: 0
      }
    },
    {
      versionKey: false,
      timestamps: true,
      collection: collectionName,
    }
  );
  return mongoose.model(modelName, ProductsSchema);
};

// Exportar esquema
module.exports = { createProductsSchema };
