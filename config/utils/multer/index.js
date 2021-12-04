const multer = require('multer')

const diskStorage = multer.diskStorage({
  filename: (req, file, cb) => {
    const fileExt = file.mimetype.split("/");
    const ext = fileExt[fileExt.length - 1];
    cb(null, req.filename + "." + ext)
  },
})

const upload = multer({ storage: diskStorage })

module.exports = { upload }