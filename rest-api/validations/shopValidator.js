const { body } = require('express-validator');

module.exports = [

    body('productName', 'Product name must be at least 3 characters long')
    .custom((value) => {
        if( value < 3) {
            throw new Error (`Product name must be at least 3 characters long`)
        }
        return true;

    }),
    body('imageUrl', 'Image Url is not valid')
    .custom((value) => {
        const regex = /^https?:\/\/.*\.(?:png|jpg|jpeg)$/;
        if(!value.match(regex)) {
            throw new Error (`Image Url is not valid`)
        }
        return true;

    }),
    body('description', 'Description must be at least 10 characters long')
    .custom((value) => {
        if( value < 10) {
            throw new Error (`Description must be at least 10 characters long`)
        }
        return true;
    }),
    body('price', 'Price is not valid')
    .custom((value) => {
        const regex = /^\d+(,\d{3})*(\.\d{1,2})*(?:)$/;
        if(!value.match(regex)) {
            throw new Error('Price is not valid')
        }
        return true;

    })
      
     
]