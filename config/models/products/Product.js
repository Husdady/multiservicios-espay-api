"use strict";

const { Schema, mongoose } = require("@database/connection");

// Crear esquema del modelo
const ProductSchema = new Schema(
  {
    initialName: String, // Nombre inicial del producto
    defaultImage: Object, // Imagen por defecto del producto
    images: [{ type: Object }], // Imágenes del producto
    name: { type: String, require: true }, // Nombre del producto
    price: { type: Number, require: true }, // Precio del producto
    description: { // Descripción del producto
      type: String,
      require: true,
      minLength: 50,
      maxLength: 350,
    },
    content: { // Contenido del producto
      type: String,
      minLength: 25,
      maxLength: 100
    },
    stock: { type: Number, require: true }, // Unidades disponibles del producto
    totalVisits: { type: Number, default: 0 }, // Visitas totales del producto
    benefits: [ // Beneficios del producto
      {
        _id: Number,
        benefit: {
          type: String,
          maxLength: 300
        },
      }
    ],
    categories: [ // Categorías del producto
      {
        ref: "Categories",
        type: Schema.Types.ObjectId,
        require: true,
      }
    ],
    usageMode: { // Modo de uso del producto
      type: String,
      require: true,
      minLength: 50,
      maxLength: 500,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    collection: "products",
  }
);

// Exportar modelo
module.exports = mongoose.model("Products", ProductSchema);
