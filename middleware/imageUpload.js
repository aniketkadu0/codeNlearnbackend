const multer = require('multer');
const path = require('path');

const imageStorage = multer.diskStorage({
    destination: 'public/uploads', 
    filename: (req, file, cb) => {
        cb(null, file.originalname.split('.')[0] + path.extname(file.originalname))
    }
});

const imageUpload = multer({
    storage: imageStorage,
    limits: {
        fileSize: 5000000   // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)) {    
            return cb(new Error('Please upload a Image'))
        }
        cb(undefined, true)
    }
})  

module.exports = { imageUpload };