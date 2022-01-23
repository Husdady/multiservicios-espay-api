// Middlewares
const { removeImageToCloudinary, removeFolderToCloudinary } = require('@middlewares/upload/Upload.Middleware')

// Utils
const { isFunction } = require('@utils/Validations');

// Eliminar producto
function deleteProduct(Model, cloudinary_folder) {
  return async (req, res) => {
    try {
    	// Obtener id del producto
    	const { productId } = req.params;

      const deletedProduct = await Model.findByIdAndDelete(productId);

      const folder = isFunction(cloudinary_folder) ? cloudinary_folder(deletedProduct) : cloudinary_folder;

      for (let image of deletedProduct.images) {
      	const path = image.cloudinary_path;
      	const removedImage = await removeImageToCloudinary(path, 'A ocurrido un error al eliminar las imágenes del producto')

	      if (removedImage instanceof Error) {
	      	throw new Error(removedImage.error);
	      }
      }

      const removedFolder = await removeFolderToCloudinary(folder, `A ocurrido un error al eliminar la carpeta ${folder} de Cloudinary`)

      if (removedFolder instanceof Error) {
      	throw new Error(removedFolder.error);
      }

      // Retornar respuesta de servidor
      res.status(204).json({})
    } catch (error) {
    	console.log('[error]', error)
      res.status(400).send({ error: error.message })
    }
  }
}

module.exports = deleteProduct
