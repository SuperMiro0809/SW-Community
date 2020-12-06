const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.js');
const auth = require('../middlewares/auth');

router.post('/register', userController.postRegister);

router.post('/login', userController.postLogin);

router.get('/logout', userController.getLogout);

router.get('/profile', auth, userController.getProfile);

router.get('/profile/cart', auth, userController.getCart);

router.get('/profile/cart/:id', auth, userController.removeFromCart);

module.exports = router;