const { validateAddUser, validateLoginUser } = require('../validator/account.validator');
const { resSuccess, resError } = require('../utils/response');
const Accounts = require('../models/accounts');
const ErrorConstant = require('../constants/error.constant');
const SuccessConstant = require('../constants/success.constant');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');



async function register(req, res) {
  const valid = await validateAddUser(req?.body)
  if (valid.status) {
    return res.status(409).send(resError(valid.error, 409));
  }
  const userDataWithEmail = await Accounts.findOne({
    where: {
      email: req.body.email
    },
    attributes: { exclude: ['password'] }
  });
  if (userDataWithEmail) {
    return res.status(409).send(resError(ErrorConstant.USER_WITH_EMAIL_ALREADY_EXISTS, 409));
  }
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
  req.body.password = hashedPassword;

  const addUser = await Accounts.create(req.body);
  if (addUser) {
    return res.send(resSuccess(SuccessConstant.USER_CREATED, 200, {}));
  }
}
async function login(req, res) {
  const valid = await validateLoginUser(req?.body)
  if (valid.status) {
    return res.status(409).send(resError(valid.error, 409));
  }
  const userDataWithEmail = await Accounts.findOne({
    where: {
      email: req.body.email
    }
  });
  if (userDataWithEmail) {
    const isMatch = await bcrypt.compare(req.body.password, userDataWithEmail?.dataValues?.password);
    if (isMatch) {
      const encryption = {
        id: userDataWithEmail?.dataValues?.id,
        username: userDataWithEmail?.dataValues?.username,
        email: userDataWithEmail?.dataValues?.email,
        phone: userDataWithEmail?.dataValues?.phone,
        address: userDataWithEmail?.dataValues?.address,
        permissions: userDataWithEmail?.dataValues?.permissions
      }
      const token = jwt.sign(
        {
          user: encryption,
        },
        process.env.SECRET_FOR_JWT,
        { expiresIn: '1d' }
      );
      return res.send(resSuccess(SuccessConstant.USER_LOGGEDIN, 200, {token}));
    } else {
      return res.status(409).send(resError(ErrorConstant.INVALID_CREDENTIAL, 409));
    }
  }
  else {
    return res.status(409).send(resError(ErrorConstant.INVALID_CREDENTIAL, 409));
  }
}

module.exports = {
  register,
  login
}