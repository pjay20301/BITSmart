const mongoose = require('mongoose')

var product = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true
    }
});

Product = mongoose.model('Product', product)

module.exports = Product;