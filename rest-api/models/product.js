const mongoose = require('mongoose');
const config = require('../config/config');

mongoose.connect(config.dbConnectionString, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const productSchema = new mongoose.Schema({
    productName : {
        type: String,
        required: true,
        unique: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    creatorId: { type: mongoose.Types.ObjectId, ref: 'user' }
});

module.exports = mongoose.model('product', productSchema)