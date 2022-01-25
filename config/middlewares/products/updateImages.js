// Utils
const { isEmptyArray } = require('@utils/Validations')
	
// Actualizar imágenes del Producto
async function updateImages(Model, extraData){
	const { itemId, recivedImages, uploadedImages, deletedImages } = extraData
	const filter = { _id: itemId }

	// Si no se han eliminado imágenes del producto
  if (isEmptyArray(deletedImages)) {
  	// Encontrar un producto por id y actualizar la imagen por defecto
    const product = await Model.findByIdAndUpdate(itemId, {
      defaultImage: uploadedImages[0],
  	}).select({ images: 1 })

 		// Iterar imágenes subidas a Cloudinary
  	for (let i = 0; i < uploadedImages.length; i++) {
  		// Obtener imagen subida a Cloudinary
    	const image = uploadedImages[i]

    	// Obtener imagen del producto
    	const productImage = product.images[i];

    	// Comprobar si el 'public_id' de la imagen del producto es igual al 'public_id' de la imagen subida a Cloudinary, es porque la imagen ya existe
    	const duplicateImage = productImage ?  productImage.public_id === image.public_id : null

    	// Si es una imagen duplicada, es decir, si ya existe la imagen y se sube la imagen otra vez
	    if (duplicateImage) {
	    	// Actualizar imágenes del producto
	      await Model.findByIdAndUpdate(itemId, {
	        images: uploadedImages
	      })

	     	break;
	    }

	    // Añadir imagen al producto
    	await Model.updateOne(filter, {
      	$push: {
        	images: image
      	},
    	})
    }

    return false;
  }

  // Si se han eliminado imágenes del producto, actualizar imagen por defecto del producto por la primera imagen recibida de 'req.body'
  await Model.findByIdAndUpdate(itemId, {
    defaultImage: recivedImages[0]
  });

  // Iterar imágenes eliminadas
  for (let k = 0; k < deletedImages.length; k++) { 
  	// Actualizar imágenes del producto, eliminando las imágenes por '_id'
    await Model.updateOne(filter, {
      $pull: {
        images: {
          _id: deletedImages[k]._id
        }
      },
    })
  }
}

module.exports = updateImages
