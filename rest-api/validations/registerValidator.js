const { body } = require('express-validator');

module.exports = [

    body('username', 'The username should be at least 5 characters long')
    .custom((value) => {
        if( value < 5) {
            throw new Error (`The username should be at least 5 characters long`)
        }
        return true;

    }),
    body('email', 'Email is not valid')
    .custom((value) => {
        const regex = /^[\w-\.]+@[\w-\.]+\.[\w-]{2,4}$/;
        if(!value.match(regex)) {
            throw new Error (`Email is not valid`)
        }
        return true;

    }),
    body('password', 'The password should be at least 6 characters long')
    .custom((value) => {
        if( value < 6) {
            throw new Error (`The password should be at least 6 characters long`)
        }
        return true;
    }),
    body('rePassword', 'Passwords don\'t match')
    .custom((value, { req }) => {
        if(value !== req.body.password) {
            throw new Error('Passwords don\'t match')
        }
        return true;

    })
      
     
]