const mongoose = require('mongoose')
const Customer = require('../models/customer')
const Cart = require('../models/cart')

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
            uid: req.params.id
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

exports.createCart = async (req, res) => {
    try {
        const newCart = Cart ({
            cid: req.params.id,
            products: []
        })
        newCart
        .save(newCart)
        .then((data) => {
            res.send(data)
        })
    } catch (err) {
        console.log(err)
        return res.status(200).send({err: 'failed to create cart'})
    }
}

exports.updateCart = async (req, res) => {
    try {
        Cart.findById(req.params.id, 
            { $set: { products: req.body.products }})
        .then((data) => {
            if(!data) {
                res.status(404).send({ message: 'Failed to add item to the cart'})
            } else {
                res.send(data)
            }
            
        })
    } catch (err) {
        console.loga(err);
        return res.status(400).json({ message: 'items couldn\'t be added to the cart' })
    }
}

exports.placeOrder = async (req, res) => {
    try {
        const newOrder = Order({
            cid: req.body.cid,
            cart: req.body.cart,
            dpid: '',
            amount: req.body.amount,
            date: Date.now()
        })
        newOrder
        .save(newOrder)
        .then((data) => {
            res.send(data)
        })
    } catch (err) {
        console.loga(err)
        return res
            .status(400)
            .json({ message: "failed to place the order" })
    }
}