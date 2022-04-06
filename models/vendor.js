const mongoose = require('mongoose')

var vendor = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    shopName: {
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
    status: {
        type: Boolean,
        default: false,
    },
})

const Vendor = mongoose.model('Vendor', vendor)

module.exports = Vendor
