const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.js');
const validationRegister = require('../validations/registerValidator');
const validatorLogin = require('../validations/loginValidator');
const auth = require('../middlewares/auth');

router.post('/register', validationRegister, userController.postRegister);

router.post('/login', validatorLogin, userController.postLogin);

router.get('/logout', userController.getLogout);

router.get('/profile', auth, userController.getProfile);

router.get('/profile/cart', auth, userController.getCart);

router.get('/profile/cart/:id', auth, userController.removeFromCart);

router.put('/cart/checkout', auth, userController.checkout);

module.exports = router;