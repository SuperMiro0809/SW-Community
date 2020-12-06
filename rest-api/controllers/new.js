const newModel = require('../models/new');
const config = require('../config/config');

module.exports = {
    getAllNews(req, res, next) {
        const limit = Number(req.query.limit) || 0;

        newModel.find({}).limit(limit).populate('creatorId')
        .then((news) => {
            res.status(200).send(news);
        })
        .catch(next)
    },

    getNewById(req, res, next) {
        const id = req.params.id;

        newModel.findById(id)
        .then((post) => {
            res.status(200).send(post);
        })
        .catch(next)
    },

    createNew(req, res, next) {
        const { title, imageUrl, post } = req.body;

        newModel.create({ title, imageUrl, post, creatorId: req.user._id })
        .then((news) => {
            res.status(201).send(news);
        })
        .catch(err => {
            if (err.name === 'MongoError' && err.code === 11000) {
                let field = err.message.split("index: ")[1];
                field = field.split(" dup key")[0];
                field = field.substring(0, field.lastIndexOf("_"));

                res.status(409)
                    .send({ message: `This ${field} is already created!` });
                return;
            }
            next(err);
        })
    }
}