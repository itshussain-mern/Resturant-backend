const {addRestaurant, getRestaurants, getRestaurantById, updateRestaurant} = require('../controllers/restaurant.controller');
const {addCategory, getCategoryById} = require('../controllers/category.controller');
const {addProduct, getProductById, getAllProductsOfRestaurant} = require('../controllers/product.controller');
const {upload} = require('../utils/uploadImage');
const { Router } = require('express');

const router = Router();

router.post('/add', upload.fields([
    {name: 'cnic_front_pic', maxCount: 1},
    {name: 'cnic_back_pic', maxCount: 1},
]), addRestaurant);
router.get('/getRestaurant', getRestaurants);
router.get('/getRestaurant/:id', getRestaurantById);
router.get('/updateRestaurant/:id', updateRestaurant);

router.post('/addCategory', upload.single('category_image'), addCategory);
router.get('/getCategory/:id', getCategoryById);

router.post('/addProduct', upload.single('product_image'), addProduct);
router.get('/getProduct/:id', getProductById);
router.get('/getAllProductsOfRestaurant/:id', getAllProductsOfRestaurant);

module.exports = router;
