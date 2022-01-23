// Middlewares
const { removeImageToCloudinary } = require('@middlewares/upload/Upload.Middleware')

// Utils
const { isEmptyArray } = require('@utils/Validations');

// Editar producto
function editProduct(Model) {
  return async (req, res, next) => {
    try {
      const {
        name,
        description,
        price,
        stock,
        content,
        benefits,
        categories,
        usageMode,
        formHasBeenEdited
      } = req.body;

      // Si la información del producto sigue siendo la misma
      if (!JSON.parse(formHasBeenEdited)) {
        throw new Error("La información del producto es la misma, por favor actualice su información")
      }

      const { productId } = req.params;
      const images = JSON.parse(req.body.images);
      
      // Nueva información del usuario
      const newProductData = {
        title: name,
        content: content,
        usageMode: usageMode,
        description: description,
        price: JSON.parse(price),
        stock: JSON.parse(stock),
        benefits: JSON.parse(benefits),
        categories: JSON.parse(categories),
      }

      // Obtener información anterior del Producto
      const lastProductData = await Model.findById(productId).select({
        title: 1,
        images: {
          _id: 1,
          url: 1,
          size: 1,
          width: 1,
          height: 1,
          format: 1,
          filename: 1,
          public_id: 1,
          cloudinary_path: 1
        }
      });

      // Actualizar producto
      const updatedProduct = await Model.findByIdAndUpdate(productId, newProductData)

      // Pasar el producto creado al siguiente middleware
      req.item = updatedProduct;

      // Pasar las nuevas imágenes del producto al siguiente middleware
      req.images = images

      // Si el total de imágenes recibidas no son iguales a las imágenes anteriores(imágenes actuales del producto en la BD), es porque existen una o varias imágenes han sido eliminadas 
      const deletedImages = []
      const lastImages = lastProductData.images;
      const existDeletedImages = req.images.length < lastImages.length;

      if (existDeletedImages) {
        // Obtener imágenes eliminadas del producto
        const deletedProductImages = lastImages.filter((lastImage) => {
          const image = images.find(img => img.public_id === lastImage.public_id);

          if (!image) return lastImage
        })

        // Iterar imágenes eliminadas
        for (let deletedProductImage of deletedProductImages) {
          // Obtener path de imagen eliminada
          const path = deletedProductImage.cloudinary_path;

          // Eliminar imagen de Cloudinary
          const removedImage = await removeImageToCloudinary(path, "A ocurrido un error al eliminar la imagen de Cloudinary");

             // Si hay algún error al eliminar una imagen
            if (removedImage instanceof Error) {
              throw new new Error(removedImage.error)
            }

          // Añadir imagen eliminada
          deletedImages.push(deletedProductImage)
        }
      }
      
      req.deletedImages = deletedImages;

      // Setear publicId a 'files'
      const files = req.files.map(file => {
        for (let i = 0; i < images.length; i++) {
          const image = images[i];

          if (image.filename === file.originalname) {
            return {
              ...file,
              public_id: image.public_id
            }
          }
        }
      })

      req.files = files;

      // Mensaje existoso
      const successMessage = {
        message: `Se ha actualizado exitosamente el producto exitosamente '${lastProductData.title}'`,
      }

      // Setear mensaje exitoso
      req.successMessage = successMessage

      // Comprobar si las imágenes recibidas no son iguales a las imágenes actuales del producto
      const imagesAreEqual = JSON.stringify(lastProductData.images) === JSON.stringify(images)

      // Si existen imágenes y estás no son iguales a las imágenes que están almacenadas en la Base de Datos
      if (!isEmptyArray(req.images) && !imagesAreEqual) {
        // Continuar al siguiente middleware
        return next();
      }

      // Retornar mensaje exitoso
      res.status(200).json(successMessage)
    } catch (error) {
      res.status(400).send({ error: error.message })
    }
  }
}

module.exports = editProduct
