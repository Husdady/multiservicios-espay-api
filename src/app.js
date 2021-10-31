"use strict";

const path = require("path");
const compression = require("compression");
const express = require("express");
const app = express();

/**
 * Configuración
 */
require("dotenv").config();
require("module-alias/register");

/**
 * Base de datos
 */
require("@database/connection");

/**
 * Uso de Middlewares
 */
app.use(compression());
app.use(express.json());

/**
 * Api Routers
 */
 require('@routes/api')(app)

/**
 * Usar módulo morgan en desarrollo
 */
if (process.env.NODE_ENV === "development") {
  const morgan = require("morgan");
  app.use(morgan("dev"));
}

if (process.env.NODE_ENV === "production") {
  // Definir una carpeta publica
  app.use(express.static("public"));
  app.use("/", (_, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  // Redireccionar a https
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') {
      res.redirect(`https://${req.header('host')}${req.url}`)
    } else {
      next();
    }
  });
}

const port = process.env.PORT;
app.listen(port || 4000, () => {
  console.log("[INFO]", `The server is running on ${process.env.NODE_APP_URL}`);
});
