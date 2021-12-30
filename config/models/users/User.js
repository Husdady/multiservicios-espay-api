'use strict'

// Cargar esquema de mongoose
const { Schema, mongoose } = require('@database/connection')

// Creamos el objeto del esquema y sus atributos
const UserSchema = new Schema(
  {
    fullname: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true,
      unique: true
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      ref: 'Role',
      type: Schema.Types.ObjectId,
      require: true,
    },
    deleted: {
      type: Boolean,
      require: true
    },
    deletedAt: Date,
    verifiedEmail: {
      type: Boolean,
      require: true
    },
    settings: Object,
  },
  {
    versionKey: false,
    timestamps: true,
    collection: 'users',
  },
)

// Exportar esquema
module.exports = mongoose.model('User', UserSchema)
