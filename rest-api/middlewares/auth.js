const config = require('../config/config');
const jwt = require('jsonwebtoken');
const { authCookieName, authHeaderName, jwtSecret } = config;

module.exports = function auth(req, res, next) {
    const token = req.cookies[authCookieName] || req.headers[authHeaderName] || '';
    if(!token) {
        next();
        return;
    }

    jwt.verify(token, jwtSecret, function(err, decoded) {
        if(err) {
            next(err);
            return;
        }

        req.user = { _id: decoded.id, username: decoded.username, email: decoded.email };
        next()
    });
}