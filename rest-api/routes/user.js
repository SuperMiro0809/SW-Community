const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.js');
const auth = require('../middlewares/auth');

router.post('/register', userController.postRegister);

router.post('/login', userController.postLogin);

router.get('/logout', userController.getLogout);

router.get('/profile', auth, userController.getProfile);


module.exports = router;