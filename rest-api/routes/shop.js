const express = require('express');
const router = express.Router();
const shopController = require('../controllers/product');
const auth = require('../middlewares/auth');

router.get('/products', auth, shopController.getAllProducts);

router.get('/products/:id', auth, shopController.getProductById);

router.post('/create', auth, shopController.createProduct);

router.get('/buy', auth, shopController.buyProducts);


module.exports = router;