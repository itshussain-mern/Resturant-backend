const { validateAddRestaurant } = require('../validator/restaurant.validator');
const { resSuccess, resError } = require('../utils/response');
const Restaurant = require('../models/restaurant');
const SuccessConstant = require('../constants/success.constant');

async function addRestaurant(req, res) {
    const valid = await validateAddRestaurant(req)
    if (valid.status) {
        return res.status(409).send(resError(valid.error, 409));
    }
    if (req.files.cnic_front_pic && req.files.cnic_back_pic) {
        let restaurantData = {
            ...req.body,
            cnic_front_image: req.files.cnic_front_pic[0].path,
            cnic_back_image: req.files.cnic_back_pic[0].path,
        }
        const addRestaurant = await Restaurant.create(restaurantData);
        if (addRestaurant) {
            return res.send(resSuccess(SuccessConstant.RESTAURANT_CREATED, 200, {}));
        }
    }
}

module.exports = {
    addRestaurant
}