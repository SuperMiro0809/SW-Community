const mongoose = require('mongoose');
const config = require('../config/config');

mongoose.connect(config.dbConnectionString, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const newSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true,
    },
    creatorId: { type: mongoose.Types.ObjectId, ref: 'user' }
})

module.exports = mongoose.model('new', newSchema);