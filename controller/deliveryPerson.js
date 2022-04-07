const mongoose = require('mongoose')
const DeliveryPerson = require('../models/deliveryPerson')

exports.signUp = async (req, res) => {
    if (
        req.body.name == '' ||
        req.body.phone == ''
    ) {
        res.status(400).json({ message: 'No field can be empty!' })
        return
    }
    try {
        const newDeliveryPerson = new DeliveryPerson({
            name: req.body.name,
            phone: req.body.phone,
            uid: req.params.id,
        })
        const publicDeliveryPerson = {
            _id: newDeliveryPerson._id,
            name: newDeliveryPerson.name,
            phone: newDeliveryPerson.phone,
        }
        newDeliveryPerson
        .save(newDeliveryPerson)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send({ error: 'Delivery Person registeration failed' })
        })
    } catch (error) {
        console.log(error)
        return res.status(200).send({ error: 'Phone number taken' })
    }
}
