"use strict";

const path = require("path");
const express = require("express");
const app = express();

/**
 * Configuración
 */
require("dotenv").config();
require("module-alias/register");
const admin = require("@routes/api/admin");
const error404 = require("@routes/dist/404");

/**
 * Base de datos
 */
require("@database/connection");

/**
 * Uso de Middlewares
 */
app.use(express.json());
app.use("/admin", admin);

/**
 * Usar módulo morgan en desarrollo
 */
if (process.env.NODE_ENV === "development") {
  const morgan = require("morgan");
  app.use(morgan("dev"));
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../public/")));
  app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
}

// PAGINA 404
app.use("*", error404);

const port = process.env.PORT;
app.listen(port || 4000, () => {
  console.log("[INFO]", `The server is running on ${process.env.NODE_APP_URL}`);
});
