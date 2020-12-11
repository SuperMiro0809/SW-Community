const express = require('express');
const router = express.Router();
const newsController = require('../controllers/new');
const newValidator = require('../validations/newValidator');
const auth = require('../middlewares/auth');

router.get('/posts', newsController.getAllNews);

router.get('/posts/:id', auth, newsController.getNewById);

router.delete('/posts/:id', auth, newsController.deleteNew)

router.post('/create', auth, newValidator, newsController.createNew);

module.exports = router;