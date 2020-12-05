const router = require('express').Router();
const users = require('./user');
const news = require('./news');
const shop = require('./shop');

router.use('/users', users);
router.use('/news', news);
router.use('/shop', shop);

module.exports = router;