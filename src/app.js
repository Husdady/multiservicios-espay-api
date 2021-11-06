"use strict";

const path = require("path");
const compression = require("compression");
const express = require("express");
const app = express();
const cors = require("cors")

/**
 * Configuración
 */
require("dotenv").config();
require("module-alias/register");
const { createDefaultRoles } = require("@utils/Helper")
createDefaultRoles();

/**
 * Base de datos
 */
require("@database/connection");

/**
 * Uso de Middlewares
 */
app.use(cors());
app.use(compression());
app.use(express.json());

/**
 * Api Routers
 */
 require('@routes/api')(app)

 // Definir una carpeta publica
 app.use(express.static("public"));
 app.use("/", (_, res) => {
   res.sendFile(path.join(__dirname, "../public/index.html"));
 });

/**
 * Usar módulo morgan en desarrollo
 */
if (process.env.NODE_ENV === "development") {
  const morgan = require("morgan");
  app.use(morgan("dev"));
}

if (process.env.NODE_ENV === "production") {
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
  console.log("[INFO]", `The server is running on ${process.env.PUBLIC_URL}`);
});
