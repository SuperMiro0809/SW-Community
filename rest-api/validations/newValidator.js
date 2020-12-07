const { body } = require('express-validator');

module.exports = [

    body('title', 'New title must be at least 5 characters long')
    .custom((value) => {
        if( value < 5) {
            throw new Error (`New title must be at least 5 characters long`)
        }
        return true;

    }),
    body('imageUrl', 'New image url is not valid')
    .custom((value) => {
        const regex = /^https?:\/\/.*\.(?:png|jpg|jpeg)$/;
        if(!value.match(regex)) {
            throw new Error (`New image url is not valid`)
        }
        return true;

    }),
    body('post', 'New post must be at least 10 characters long')
    .custom((value) => {
        if( value < 10) {
            throw new Error (`New post must be at least 10 characters long`)
        }
        return true;
    })
    
]