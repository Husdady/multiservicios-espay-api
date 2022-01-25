"use strict";

// Cargar esquema de mongoose
const { Schema, mongoose } = require("@database/connection");

// Creamos el objeto del esquema y sus atributos
const AdminSchema = new Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      ref: "Role",
      type: Object,
      required: true,
    },
    verifiedEmail: Boolean,
    settings: Object
  },
  {
    versionKey: false,
    timestamps: true,
    collection: "admin",
  }
);

// Exportar esquema
module.exports = mongoose.model("Admin", AdminSchema)
