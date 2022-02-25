const mongoose = require('mongoose')
const Customer = require('../models/customer')

exports.signUp = async (req, res) => {
    if (req.body.name == '' || req.body.address == '' || req.body.phone == '') {
        res.status(400).json({ message: 'No field can be empty!' })
        return
    }
    try {
        const newCustomer = new Customer({
            name: req.body.name,
            address: req.body.address,
            phone: req.body.phone,
        })
        const publicCustomer = {
            _id: newCustomer._id,
            name: newCustomer.name,
            adderess: newCustomer.address,
            phone: newCustomer.phone,
        }
        newCustomer
        .save(newCustomer)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send({ error: 'Customer registeration failed' })
        })
        //return res.status(201).send({ user: publicCustomer})
    } catch (error) {
        console.log(error)
        return res.status(200).send({ error: 'Phone number taken' })
    }
} 