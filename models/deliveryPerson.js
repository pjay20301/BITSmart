const mongoose = require('mongoose')

var deliveryPerson = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        uid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    { timestamps: true }
)

const DeliveryPerson = mongoose.model('DeliveryPerson', deliveryPerson)

module.exports = DeliveryPerson