const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('../models/user')

exports.signIn = async (req, res) => {

    if (req.body.email == '' || req.body.password == '') {
    res.status(400).json({ message: 'No field can be empty!' })
    return
    }
    try {
        const user = await User.findByCredentials(
        req.body.email,
        req.body.password
    )

    if (user instanceof Error) {
        throw user
    }
    const publicUser = {
        _id: user._id,
        email: user.email,
        role: user.role,
    }
    const token = await user.generateToken()
        return res.send({ user: publicUser, token })
    } catch (error) {
        return res.status(200).send({ error: error.message })
    }
}

exports.signUp = async (req, res) => {
    if (
        req.body.email == '' ||
        req.body.password == '' ||
        req.body.rePassword == ''
    ) {
        res.status(400).json({ message: 'No field can be empty!' })
        return
    }

    if (req.body.role == '') {
        res.status(400).json({ message: 'Select a role!' })
        return
    }
    try {
        const newUser = new User({
        email: req.body.email,
        password: req.body.password,
        tokens: [],
        role: req.body.role,
        })
        const token = await newUser.generateToken()
        const publicUser = {
        _id: newUser._id,
        email: newUser.email,
        role: newUser.role,
        }
        return res.status(201).send({ user: publicUser, token })
    } catch (error) {
        return res.status(200).send({ error: 'Email1 ID taken' })
    }
}

exports.signOut = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(
        (tokenObject) => tokenObject.token != req.token
        )
        await req.user.save()
        return res.send('Signed Out')
    } catch (e) {
        return res.status(500).send(e)
    }
}

exports.getRole = async (req,res) => {
    try {
        const emailId = req.params.id
        console.log(emailId)
        User.findOne({email:emailId})
        .then((data) => {
            if(!data) {
                return res.status(404).send({
                    message: `cannot find email by email id ${emailId}`
                })
            } else {
                console.log(data.role)
                return res.send(data.role)
            }
        })
    } catch(e) {
        return res.status(500).send(e)
    }
}
