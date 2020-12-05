const express = require('express');
const router = express.Router();
const newsController = require('../controllers/new');
const auth = require('../middlewares/auth');

router.get('/posts', newsController.getAllNews);

router.get('/posts/:id', auth, newsController.getNewById);

router.get('/create', auth, newsController.createNew);

module.exports = router;