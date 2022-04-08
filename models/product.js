const mongoose = require('mongoose')
const Vendor = require('./vendor')

var product = mongoose.Schema(
    {
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
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },
        vendor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vendor',
            required: true,
        },
    },
    { timestamps: true }
)

Product = mongoose.model('Product', product)

module.exports = Product;