const ErrorConstant = require('../constants/error.constant');
const validateEmail = require('./email.validator');



async function validateAddRestaurant(input){
    let error = {
        status: false,
        error: ""
    }
    if(!input?.body?.name){
        error.status = true;
        error.error = ErrorConstant.RESTAURANT_NAME_REQUIRED;
        return error;
    }
    if(!input?.body?.slogan){
        error.status = true;
        error.error = ErrorConstant.RESTAURANT_SLOGAN_REQUIRED;
        return error;
    }
    if(!input?.body?.location){
        error.status = true;
        error.error = ErrorConstant.RESTAURANT_LOCATION_REQUIRED;
        return error;
    }
    if(!input?.body?.phone){
        error.status = true;
        error.error = ErrorConstant.PHONE_REQUIRED;
        return error;
    }
    if(!input?.body?.email){
        error.status = true;
        error.error = ErrorConstant.EMAIL_REQUIRED;
        return error;
    }
    if(!input?.body?.cnic_number){
        error.status = true;
        error.error = ErrorConstant.CNIC_REQUIRED;
        return error;
    }
    if(!input.files.cnic_front_pic){
        error.status = true;
        error.error = ErrorConstant.CNIC_FRONTIMAGE_REQUIRED;
        return error;
    }
    if(!input.files.cnic_back_pic){
        error.status = true;
        error.error = ErrorConstant.CNIC_BACKIMAGE_REQUIRED;
        return error;
    }
    if (!validateEmail(input?.body?.email)) {
        error.status = true;
        error.error = ErrorConstant.INVALID_EMAIL;
        return error;
    }
    return error

}

module.exports = {
    validateAddRestaurant,
}