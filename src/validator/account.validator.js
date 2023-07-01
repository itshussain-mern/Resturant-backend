const ErrorConstant = require('../constants/error.constant');
const validateEmail = require('./email.validator');



async function validateAddUser(input){
    let error = {
        status: false,
        error: ""
    }
    if(!input.username){
        error.status = true;
        error.error = ErrorConstant.USERNAME_REQUIRED;
        return error;
    }
    if(!input.password){
        error.status = true;
        error.error = ErrorConstant.PASSWORD_REQUIRED;
        return error;
    }
    if(!input.email){
        error.status = true;
        error.error = ErrorConstant.EMAIL_REQUIRED;
        return error;
    }
    if(!input.phone){
        error.status = true;
        error.error = ErrorConstant.PHONE_REQUIRED;
        return error;
    }
    if(!input.address){
        error.status = true;
        error.error = ErrorConstant.ADDRESS_REQUIRED;
        return error;
    }
    if (!validateEmail(input.email)) {
        error.status = true;
        error.error = ErrorConstant.INVALID_EMAIL;
        return error;
    }
    return error

}
module.exports = {
    validateAddUser
}