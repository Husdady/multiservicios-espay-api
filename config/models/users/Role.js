"use strict";

// Cargar esquema de mongoose
const { Schema, mongoose } = require("@database/connection");

// Creamos el objeto del esquema y sus atributos
const RoleSchema = new Schema(
  {
    name: { type: String, unique: true, required: true },
    permissions: { type: Object, required: true },
  },
  {
    versionKey: false,
    collection: "roles",
  }
);

// Exportar esquema
module.exports = mongoose.model("Role", RoleSchema);
