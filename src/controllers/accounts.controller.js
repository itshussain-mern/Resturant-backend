const {validateAddUser} = require('../validator/account.validator');
const { resSuccess, resError } = require('../utils/response');
const Accounts = require('../models/accounts');
const ErrorConstant = require('../constants/error.constant');
const SuccessConstant = require('../constants/success.constant');
const bcrypt = require('bcrypt')



async function register(req, res) {
    const valid = await validateAddUser(req?.body)
    if(valid.status){
      return res.status(409).send(resError(valid.error, 409));
    }
    const userDataWithEmail = await Accounts.findOne({
      where: {
        email: req.body.email
      },
      attributes: { exclude: ['password'] }
    });
    if(userDataWithEmail){
      return res.status(409).send(resError(ErrorConstant.USER_WITH_EMAIL_ALREADY_EXISTS, 409));
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    req.body.password = hashedPassword;

    const addUser = await Accounts.create(req.body);
    if(addUser){
      return res.send(resSuccess(SuccessConstant.USER_CREATED, 200, {}));
    }
}

module.exports = {register}