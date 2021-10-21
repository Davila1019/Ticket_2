const multer  = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/imgs')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, `${file.originalname}`)
    }
  })
  
  var upload = multer({ storage:storage })

  module.exports = upload