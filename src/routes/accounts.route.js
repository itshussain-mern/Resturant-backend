const {register} = require('../controllers/accounts.controller');
const { Router } = require('express');

const router = Router();

router.post('/register', register);

module.exports = router;
