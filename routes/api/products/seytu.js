// Librarys
const { Router } = require('express')
const router = Router()

// Controllers
const { editProduct, createProduct, deleteProduct } = require('@controllers/products/Products.Controller')
const { createCategory, editCategory, deleteCategory } = require('@controllers/products/Categories.Controller');

// Models
const { SeytuProducts } = require("@models/products/Product");
const { SeytuCategories } = require("@models/products/Category");

// Middlewares
const { verifyToken } = require('@middlewares/auth/token')
const verifyPermission = require('@middlewares/user/verifyPermission')
const { uploadMultipleImages, updateMultipleImages } = require('@middlewares/upload/Upload.Middleware')

// Utils
const { upload } = require('@utils/multer')
const { isEmptyArray } = require('@utils/Validations')

// Verificar permiso para crear un producto
const permissionRequiredToCreateProducts = verifyPermission({
  action: 'crear productos',
  permission: 'createProducts',
})

// Verificar permiso para editar un producto
const permissionRequiredToEditProducts = verifyPermission({
  action: 'editar productos',
  permission: 'editProducts',
})

// Verificar permiso para eliminar un producto
const permissionRequiredToDeleteProducts = verifyPermission({
  action: 'eliminar productos',
  permission: 'deleteProducts',
})

const Seytu = {
  createCategory: createCategory(SeytuCategories),
  editCategory: editCategory(SeytuCategories),
  deleteCategory: deleteCategory(SeytuCategories, SeytuProducts),
  editProduct: editProduct(SeytuProducts),
  createProduct: createProduct(SeytuProducts),
  deleteProduct: deleteProduct(SeytuProducts, (deletedProduct) => {
    return `seytu.products/${deletedProduct.initialName}`
  }),
}

// Crear nueva categoría de los productos Seytu
router.post('/categories/add', verifyToken, Seytu.createCategory)

// Editar una categoría de los productos Seytu
router.put('/categories/:categoryId', verifyToken, Seytu.editCategory)

// Eliminar una categoría de los productos Seytu
router.delete('/categories/:categoryId', verifyToken, Seytu.deleteCategory)

// Crear nueva categoría de los productos Seytú
router.post(
  '/add-new-product',
  [verifyToken, permissionRequiredToCreateProducts],
  upload.array('productImages', 16),
  Seytu.createProduct,
  uploadMultipleImages({
    errorMessage: "A ocurrido un error al subir la imagen o imágenes del producto Seytú",
    cloudinary_folder: (product) => `seytu.products/${product.initialName}`,
    onGetImages: async (itemId, uploadedImages) => {
      await SeytuProducts.findByIdAndUpdate(itemId, {
        images: uploadedImages,
        defaultImage: uploadedImages[0],
      })
    }
  }),
)

// Actualizar información de un producto Seytú
router.put(
  '/:productId',
  [verifyToken, permissionRequiredToEditProducts],
  upload.array('productImages', 16),
  Seytu.editProduct,
  updateMultipleImages({
    errorMessage: "A ocurrido un error al actualizar las imágenes del producto Seytú",
    cloudinary_folder: (product) => `seytu.products/${product.initialName}`,
    onGetImages: async ({
      itemId,
      recivedImages,
      deletedImages,
      uploadedImages,
    }) => {
      const filter = { _id: itemId }

      // Si el total de las imágenes recibidas es mayor a las imágenes anteriores (imágenes en la BD de un producto), es por que se han añadido nuevas imágenes
      if (isEmptyArray(deletedImages)) {
        const product = await SeytuProducts.findByIdAndUpdate(itemId, {
          defaultImage: uploadedImages[0],
        })
        .select({ images: 1 })

        for (let i = 0; i < uploadedImages.length; i++) {
          const image = uploadedImages[i]
          const lastImage = product.images[i];
          const duplicateImage = lastImage ?  lastImage.public_id === image.public_id : null;

          if (duplicateImage) {
            await SeytuProducts.findByIdAndUpdate(itemId, {
              images: uploadedImages
            })

            break;
          }

          await SeytuProducts.updateOne(filter, {
            $push: {
              images: image
            },
          })
        }

        return false;
      }

      await SeytuProducts.findByIdAndUpdate(itemId, {
        defaultImage: recivedImages[0]
      });

      for (let k = 0; k < deletedImages.length; k++) { 
        await SeytuProducts.updateOne(filter, {
          $pull: {
            images: {
              _id: deletedImages[k]._id
            }
          },
        })
      }

    }
  }),
)

// Eliminar una categoría de los productos Seytú
router.delete('/:productId', verifyToken, permissionRequiredToDeleteProducts, Seytu.deleteProduct)

module.exports = router
