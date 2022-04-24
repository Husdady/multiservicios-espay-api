"use strict";

const { Schema, mongoose } = require("@database/connection");

// Crear esquema del modelo
const ContactSchema = new Schema(
  {
    contactPhoto: Object, // Foto de contacto
    location: { type: String, required: true }, // Ubicación de contacto
    phone: { type: String, required: true }, // Teléfono de contacto
    email: { type: String, required: true }, // Correo electrónico de contacto
    facebookPage: { // Página de facebook de contacto
      name: { type: String, required: true },
      url: { type: String, required: true }
    },
  },
  {
    versionKey: false,
    timestamps: false,
    collection: "contact",
  }
);

// Exportar modelo
module.exports = mongoose.model("Contact", ContactSchema)
