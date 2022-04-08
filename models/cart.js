const mongoose = require('mongoose')
var cart = mongoose.Schema(
    {
        cid: {
            type: mongoose.Schema.Types.ObjectId,
            reference: 'Customer',
            required: true,
        },
        products: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product',
                    required: true,
                },
                qty: {
                    type: Number,
                    default: 0,
                    required: true,
                },
            }
        ]
    },
    { timestamps: true }
)
const Cart = mongoose.model('Cart', cart)

module.exports = Cart