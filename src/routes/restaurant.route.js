const {addRestaurant} = require('../controllers/restaurant.controller');
const {upload, validateImageUpload} = require('../utils/uploadImage');
const { Router } = require('express');

const router = Router();

router.post('/add', upload.fields([
    {name: 'cnic_front_pic', maxCount: 1},
    {name: 'cnic_back_pic', maxCount: 1},
]), addRestaurant);


module.exports = router;
