const productModel = require('../models/product');
const userModel = require('../models/user');
const { validationResult } = require('express-validator');
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
        const { productName, imageUrl, description, quantity, currency, price} = req.body;

        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            next();
            return;
        }

        productModel.create({ productName, imageUrl, description, quantity, currency, price, creatorId: req.user._id })
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

        productModel.findById(id).populate('creatorId')
        .then((product) => {
            res.status(200).send(product);
        })
        .catch(next)
    },

    buyProduct(req, res, next) {
        const userId = req.user._id;
        const productId = req.params.id;

        userModel.findById(userId)
        .then((user) => {

            productModel.findById(productId).populate('creatorId')
            .then((product) => {
                if(user.cart.includes(productId) || product.creatorId._id.toString() === userId || product.quantity === 0) {
                    next();
                    return;
                 }

                 userModel.update({ _id: userId }, { $push: { cart: productId } })
                 .then(() => {
                    res.status(200).send({ message: 'You added this product to your cart!', product: product });
                 })
                 .catch(next);
                
            })
            .catch(next);
        })
        .catch(next)
    },

    deleteById(req, res, next) {
        const userId = req.user._id;
        const productId = req.params.id;

        productModel.findById(productId)
        .then((product) => {
            if(product.creatorId.toString() !== userId) {
                next();
                return;
            }

            productModel.findByIdAndDelete(productId, function(err) {
                if(err) {
                    next(err);
                    return;
                }
                res.status(200).send({ message: 'Product deleted successfully' });
            })
        })
        .catch(next)
    }
}