const userModel = require('../models/user.js');
const productModel = require('../models/product');
const { validationResult } = require('express-validator');
const config = require('../config/config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { jwtSecret, authCookieName, authHeaderName, saltRounds } = config;

module.exports = {

    postRegister(req, res, next) {
        const { username, email, password, rePassword } = req.body;

        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            next();
            return;
        }

        return userModel.create({ username, email, password, rePassword })
            .then((user) => {

                const token = jwt.sign({ id: user._id, username, email }, jwtSecret, { expiresIn: '1d' });

                res.cookie(authCookieName, token, { httpOnly: true })
                res.status(200)
                    .send(user);
            })
            .catch(err => {
                if (err.name === 'MongoError' && err.code === 11000) {
                    let field = err.message.split("index: ")[1];
                    field = field.split(" dup key")[0];
                    field = field.substring(0, field.lastIndexOf("_"));

                    res.status(409)
                        .send({ message: `This ${field} is already registered!` });
                    return;
                }
                next(err);
            });
    },

    postLogin(req, res, next) {
        const { email, password } = req.body;

        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            next();
            return;
        }

        userModel.findOne({ email })
            .then(user => {
                return Promise.all([user, user ? user.matchPassword(password) : false]);
            })
            .then(([user, match]) => {
                if (!match) {
                    res.status(401)
                        .send({ message: 'Wrong email or password' });
                    return
                }

                const token = jwt.sign({ id: user._id, username: user.username, email }, jwtSecret, { expiresIn: '1d' });

                res.cookie(authCookieName, token, { httpOnly: true })
                res.status(200)
                    .send(user);
            })
            .catch(next);
    },

    getProfile(req, res, next) {
        const { _id } = req.user;

        userModel.findOne({ _id })
            .then((user) => {
                res.status(200).send(user);
            })
            .catch(next)
    },

    getLogout(req, res) {
        const token = req.cookies[authCookieName] || req.headers[authHeaderName] || '';
        if (!token) {
            res.status(401);
            return;
        }

        res.clearCookie(authCookieName);
        res.status(200).send({ message: 'Logged out!' });
    },

    getCart(req, res, next) {
        const { _id } = req.user;

        userModel.findOne({ _id }).populate('cart')
            .then((user) => {
                res.status(200).send(user);
            })
            .catch(next)
    },

    removeFromCart(req, res, next) {
        const { _id } = req.user;
        const productId = req.params.id;

        productModel.findById(productId)
        .then((product) => {

            userModel.update({ _id }, { $pull: { cart: productId } })
            .then(() => {
                res.status(200).send({ message: 'Product removed from cart!' });
            })
            .catch(next);

        })
        .catch(next)
    },

    checkout(req, res, next) {
        const { _id } = req.user;
        let ids = req.body.ids;
        ids.forEach(i => {

            productModel.findById(i)
            .then((product) => {
                if(product.quantity === 1) {
                    Promise.all([
                        productModel.findByIdAndDelete(i),
                        userModel.update({ _id }, { $pull: { cart: i } })
                    ]).catch(next)

                }else {
                    Promise.all([
                        productModel.update({ _id: i }, { quantity: product.quantity - 1 }),
                        userModel.update({ _id }, { $pull: { cart: i } })
                    ]).catch(next)
                }
            })
            .catch(next)
        })
        res.status(200).send({ message: 'Checkout successful!' })
    },

    changePassword(req, res, next) {
        let { password } = req.body;
        const { _id } = req.user;

        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                userModel.update({ _id }, { password: hash })
                .then(() => {
                    res.status(200).send({ message: 'Password updated' });
                })
                .catch(next)
            })
        })
    },

    forgotPassword(req, res, next) {
        let { email, password } = req.body;

        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                userModel.findOne({ email })
                .then((user) => {
                    userModel.update({ _id: user._id }, { password: hash })
                    .then(() => {
                        res.status(200).send({ message: 'Password changed' });
                    })
                    .catch(next)
                })
                .catch(err => {
                    res.status(401).send({ message: 'Email is not registered' });
                });
            })
        })
    }

}