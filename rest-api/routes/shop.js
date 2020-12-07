const express = require('express');
const router = express.Router();
const shopController = require('../controllers/product');
const shopValidator = require('../validations/shopValidator')
const auth = require('../middlewares/auth');

router.get('/products', auth, shopController.getAllProducts);

router.get('/products/:id', auth, shopController.getProductById);

router.post('/create', auth, shopValidator, shopController.createProduct);

router.get('/buy/:id', auth, shopController.buyProduct);


module.exports = router;