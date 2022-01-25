// Utils
const cloudinary = require('@utils/cloudinary')
const { isFunction, isEmptyArray } = require('@utils/Validations')

// Subir imagen a Cloudinary
async function uploadImageToCloudinary({ file, config, errorMessage }) {
  return new Promise((resolve) => {
    console.log('[uploadImageToCloudinary]')
    cloudinary.v2.uploader.upload(file, config, function(err, res){
      console.log('[uploadImageToCloudinary.err]', err)
      if (err) throw new Error(errorMessage);
      const publicId = res.public_id.split("/")[2]
      resolve({
        _id: res.asset_id,
        size: res.bytes,
        width: res.width,
        height: res.height,
        url: res.secure_url,
        public_id: publicId,
        format: res.format,
        filename: config.filename,
        cloudinary_path: res.public_id,
        created_at: res.created_at,
      })
    })
  })
}

// Eliminar imagen de Cloudinary
async function removeImageToCloudinary(public_id, errorMessage) {
  console.log('[removeImageToCloudinary]')
  return new Promise((resolve) => {
    cloudinary.v2.uploader.destroy(public_id, (err, res) => {
      console.log('[removeImageToCloudinary.err]', err)
      if (err) throw new Error(errorMessage)
      resolve(res)
    })
  })
}

// Eliminar carpeta de Cloudinary
async function removeFolderToCloudinary(folder, errorMessage) {
  console.log('[removeFolderToCloudinary]')
  return new Promise((resolve) => {
    cloudinary.v2.api.delete_folder(folder, (err, res) => {
      console.log('[removeFolderToCloudinary.err]', err)
      console.log('[removeFolderToCloudinary.err]', err)
      if (err) throw new Error(errorMessage)
      resolve(res)
    })
  })
}

// Subir imagen a la DB
function uploadImage(settings) {
  return async (req, res) => {
    // Obtener ajustes
    const { path, Model, filename, cloudinary_folder, uploadError } = settings

    try {
      // Setear nombre de imagen subida a Cloudinary
      req.filename = isFunction(filename) ? filename(req.fileId) : filename

      // Subir imagen a Cloudinary
      await cloudinary.v2.uploader.upload(
        req.file.path,
        {
          folder: cloudinary_folder,
          public_id: req.filename,
        },
        async function (error, result) {
          try {
            // Si existe un error al subir la foto
            if (error) {
              throw new Error(uploadError)
            }

            let user
            const photo = {
              $set: {
                [path]: {
                  _id: result.asset_id,
                  url: result.secure_url,
                  size: result.bytes,
                  width: result.width,
                  height: result.height,
                  format: result.format,
                  created_at: result.created_at,
                },
              },
            }

            if (req.fileId) {
              // Actualizar foto por id
              user = await Model.findByIdAndUpdate(req.fileId, photo, { new: true })
            } else {
              // Actualizar foto por otro campo
              await Model.findOneAndUpdate({}, photo, { new: true })
            }

            // Obtener query condition
            const { returnUserData } = req.query

            // Si se debe obtener la información del usuario actualizada
            if (returnUserData && JSON.parse(returnUserData)) {
              return res.status(200).json({
                message: req.successMessage.message,
                profilePhoto: {
                  url: user?.settings?.avatar?.url,
                },
              })
            } else {
              // Retornar mensaje exitoso
              res.status(200).json(req.successMessage)
            }
          } catch (error) {
            console.log(error)
          }
        },
      )
    } catch (err) {
      res.status(400).send({ error: err.message })
    }
  }
}

// Subir múltiples imágenes de Cloudinary
function uploadMultipleImages(settings) {
  return async (req, res) => {
    try {
      // Obtener ajustes
      const { onUploadImages, errorMessage, cloudinary_folder } = settings

      // Setear folder de la imagen de Cloudinary
      const folder = isFunction(cloudinary_folder) ? cloudinary_folder(req.item) : cloudinary_folder

      const uploadImages = []

      // Obtener imágenes
      const images = req.images
      
      // Obtener archivos de imágenes
      const files = req.files
      
        // Iterar archivos de imágenes
        for (let i = 0; i < images.length; i++) {
          const file = files[i];
          const image = images[i];

          // Obtener imagen subida a Cloudinary
          const newUploadImage = await uploadImageToCloudinary({
            errorMessage: errorMessage,
            file: file.path,
            config: {
              folder: folder,
              public_id: image.public_id,
              filename: image.filename,
            },
          })

          // Si hay algún error al subir una imagen
          if (newUploadImage instanceof Error) {
            throw new new Error(newUploadImage.error)
          }

          // Añadir nueva imagen subida a Cloudinary
          uploadImages.push(newUploadImage)
        }

      if (isFunction(onUploadImages)) {
        await onUploadImages(req.item._id, uploadImages)
      }

      // Retornar mensaje exitoso
      res.status(200).json(req.successMessage)
    } catch (error) {
      res.status(400).send({ error: error.message })
    }
  }
}

// Actualizar múltiples imágenes de Cloudinary
function updateMultipleImages(settings) {
  return async (req, res) => {
    try {
      // Obtener ajustes
      const { onUploadImages, errorMessage, cloudinary_folder } = settings

      // Setear folder de la imagen de Cloudinary
      const folder = isFunction(cloudinary_folder) ? cloudinary_folder(req.item) : cloudinary_folder

      const uploadImages = []
      
      // Obtener archivos de imágenes
      const files = req.files
      
      if (isEmptyArray(req.deletedImages)) {
        // Iterar archivos de imágenes
        for (let i = 0; i < files.length; i++) {
          const file = files[i];

          // Obtener imagen subida a Cloudinary
          const newUploadImage = await uploadImageToCloudinary({
            errorMessage: errorMessage,
            file: file.path,
            config: {
              folder: folder,
              public_id: file.public_id,
              filename: file.originalname,
            },
          })

          // Si hay algún error al subir una imagen
          if (newUploadImage instanceof Error) {
            throw new new Error(newUploadImage.error)
          }

          // Añadir nueva imagen subida a Cloudinary
          uploadImages.push(newUploadImage)
        }
      }

      if (isFunction(onUploadImages)) {
        await onUploadImages({
          itemId: req.item._id,
          recivedImages: req.images,
          deletedImages: req.deletedImages,
          uploadedImages: uploadImages
        })
      }

      // Retornar mensaje exitoso
      res.status(200).json(req.successMessage)
    } catch (error) {
      res.status(400).send({ error: error.message })
    }
  }
}

// Eliminar imagen alojada en Cloudinary
function deleteImage({ cloudinary_path }) {
  return async (req, res) => {
    try {
      // Eliminar imagen de Cloudinary
      cloudinary.v2.uploader.destroy(`${cloudinary_path}-${req.fileId}`, function (error, result) {
        console.log('[deleteImageFromCloudinary.error]', error)
        console.log('[deleteImageFromCloudinary.result]', result)
      })

      res.status(204).json({})
    } catch (err) {
      console.log('[deletePhoto.error]', err)
    }
  }
}

module.exports = {
  uploadImage,
  updateMultipleImages,
  uploadMultipleImages,
  deleteImage,
  uploadImageToCloudinary,
  removeImageToCloudinary,
  removeFolderToCloudinary,
}
