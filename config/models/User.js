"use strict";

// Librarys
const bcrypt = require("bcrypt");
// Cargar esquema de mongoose
const { Schema, mongoose } = require("@database/connection");

// Creamos el objeto del esquema y sus atributos
const UserSchema = new Schema(
  {
    fullname: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String },
    role: {
      ref: "Role",
      type: Schema.Types.ObjectId,
    },
    verifiedEmail: Boolean
  },
  {
    versionKey: false,
    timestamps: true,
    collection: "users",
  }
);

// Exportar esquema
module.exports = {
  structure: UserSchema.paths,
  User: mongoose.model("User", UserSchema)
};
