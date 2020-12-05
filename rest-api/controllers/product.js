const productModel = require('../models/product');
const config = require('../config/config');

module.exports = {
    getAllProducts(req, res, next) {
        productModel.find({}).populate('creatorId')
        .then((products) => {
            res.status(200).send(products);
        })
        .catch(next)
    },

    createProduct(req, res, next) {
        const { productName, imageUrl, description, price} = req.body;

        productModel.create({ productName, imageUrl, description, price, creatorId: req.user._id })
        .then((product) => {
            res.status(201).send(product);
        })
        .catch(err => {
            if (err.name === 'MongoError' && err.code === 11000) {
                let field = err.message.split("index: ")[1];
                field = field.split(" dup key")[0];
                field = field.substring(0, field.lastIndexOf("_"));
                if(field === 'productName') {
                    field = 'product name'
                }
                res.status(409)
                    .send({ message: `This ${field} is already created!` });
                return;
            }
            next(err);
        })
    },

    getProductById(req, res, next) {
        const id = req.params.id;

        productModel.findById(id)
        .then((product) => {
            res.status(200).send(product);
        })
        .catch(next)
    },

    buyProducts(req, res, next) {

    }
}