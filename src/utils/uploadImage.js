const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === 'cnic_front_pic' || file.fieldname === 'cnic_back_pic') {
            cb(null, './src/Images/cnic');
        }
        else if (file.fieldname === 'category_image') {
            cb(null, './src/Images/category');
        }
        else if (file.fieldname === 'product_image') {
            cb(null, './src/Images/product');
        }
    },
    filename: (req, file, cb) => {
        if (file.fieldname === 'cnic_front_pic' || file.fieldname === 'cnic_back_pic') {
            cb(null, Date.now() + path.extname(file.originalname));
        }
        else if (file.fieldname === 'category_image') {
            cb(null, Date.now() + path.extname(file.originalname));
        }
        else if (file.fieldname === 'product_image') {
            cb(null, Date.now() + path.extname(file.originalname));
        }
    }
});
const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if (mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
})


module.exports = { upload }