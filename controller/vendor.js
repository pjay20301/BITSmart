const mongoose = require('mongoose')
const Vendor = require('../models/vendor')

exports.signUp = async (req, res) => {
    if (req.body.name == '' || req.body.address == '' || req.body.phone == '' || req.body.shopName == '') {
        res.status(400).json({ message: 'No field can be empty!' })
        return
    }
    try {
        const newVendor = new Vendor({
        name: req.body.name,
        shopName: req.body.shopName,
        address: req.body.address,
        phone: req.body.phone,
        })
        const publicVendor = {
        _id: newVendor._id,
        name: newVendor.name,
        shopName: newVendor.shopName,
        adderess: newVendor.address,
        phone: newVendor.phone,
        }
        newVendor
        .save(newVendor)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send({ error: 'Vendor registeration failed' })
        })
        //return res.status(201).send({ user: publicCustomer})
    } catch (error) {
        console.log(error)
        return res.status(200).send({ error: 'Phone number taken' })
    }
}
