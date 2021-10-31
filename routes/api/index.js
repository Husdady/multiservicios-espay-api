const productosSeytu = require("./productos/productos-seytu");
const productosOmnilife = require("./productos/productos-omnilife");

const apiRouter = [productosSeytu, productosOmnilife]

module.exports = function(app) {
  app.use("/api", apiRouter)
}