"use strict";

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
    verifiedEmail: Boolean,
    settings: {
      avatar: {
        photo: Object,
        backgroundColor: String
      }
    }
  },
  {
    versionKey: false,
    timestamps: true,
    collection: "users",
  }
);

// Exportar esquema
module.exports = mongoose.model("User", UserSchema)
