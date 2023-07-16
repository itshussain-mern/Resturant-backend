const ErrorConstant = require('../constants/error.constant');

async function validateAddProduct(input){
    let error = {
        status: false,
        error: ""
    }
    if(!input?.body?.name){
        error.status = true;
        error.error = ErrorConstant.PRODUCT_NAME_REQUIRED;
        return error;
    }
    if(!input?.body?.description){
        error.status = true;
        error.error = ErrorConstant.CATEGORY_DESCRIPTION_REQUIRED;
        return error;
    }
    if(!input?.body?.price){
        error.status = true;
        error.error = ErrorConstant.PRODUCT_PRICE_REQUIRED;
        return error;
    }
    if(!input.file){
        error.status = true;
        error.error = ErrorConstant.PRODUCT_IMAGE_REQUIRED;
        return error;
    }
    return error

}

module.exports = {
    validateAddProduct,
}