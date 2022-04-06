const mongoose = require('mongoose')
var cart = mongoose.Schema ({
    uid: {
        type: Schema.Types.ObjectId,
        reference: 'Customer'
    },
    cartProducts: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        },
        qty: {
            type: Number,
        }
    }]
});
const Cart = mongoose.model('Cart', cart)

module.exports = Cart