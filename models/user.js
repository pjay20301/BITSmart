const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcyrpt = require('bcrypt')

const jwtsecret = process.env.JWTSECRET

var user = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    tokens: [
        {
        token: {
            type: String,
            required: true,
        },
        },
    ],
    role: {
        type: String,
        required: true,
    },
})

user.methods.generateToken = async function () {
    const token = jwt.sign({ _id: this._id.toString() }, jwtsecret)
    this.tokens = this.tokens.concat({ token })
    await this.save()
    return token
}

user.statics.findByCredentials = async (email, password) => {
    try {
        const user = await User.findOne({ email })
        if (!user) {
        throw new Error('User not found')
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
        throw new Error('Incorrect Password')
        }
        return user
    } catch (error) {
        return error
    }
}

user.pre('save', async function (next) {
    if (this.isModified('password')) {
        const saltRounds = 10
        this.password = await bcrypt.hash(this.password, saltRounds)
    }
    next()
})

const User = mongoose.model('User', user)

module.exports = User