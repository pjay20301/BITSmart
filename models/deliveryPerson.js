const mongoose = require('mongoose')

var deliveryPerson = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
})

const DeliveryPerson = mongoose.model('DeliveryPerson', deliveryPerson)

module.exports = DeliveryPerson