"use strict";

// Cargar esquema de mongoose
const { Schema, mongoose } = require("@database/connection");

// Creamos el objeto del esquema y sus atributos
const ContactSchema = new Schema(
  {
    fullname: { type: String, required: true },
    aboutMe: { type: String, required: true },
    testimony: { type: String, required: true },
    omnilifeCode: { type: String, required: true },
    phone: { type: String, required: true },
    contactPhoto: String,
    socialNetworks: [{
      pages: [{
        title: String,
        link: String
      }],
      socialNetwork: String 
    }],
    emails: [{ type: String }]
  },
  {
    versionKey: false,
    timestamps: false,
    collection: "contact",
  }
);

// Exportar esquema
module.exports = mongoose.model("Contact", ContactSchema)
