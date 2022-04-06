const mongoose = require('mongoose')

var customer = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
})

const Customer = mongoose.model('Customer', customer)

module.exports = Customer