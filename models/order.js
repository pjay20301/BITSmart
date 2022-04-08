const mongoose = require('mongoose')

var order = mongoose.Schema(
    {
        cid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer',
            required: true,
        },
        cart: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cart',
            required: true,
        },
        dpid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'deliveryPerson',
            required: true,
        },
        amount: {
            type: Number,
            required: true,
            default: 0,
        },
        date: {
            type: Date,
            required: true,
        },
    },
    { timestamps: true }
)

Order = mongoose.model('Order', order)

module.exports = Order