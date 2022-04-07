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
    uid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
})

const Vendor = mongoose.model('Vendor', vendor)

module.exports = Vendor
