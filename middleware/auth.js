const jwt = require('jsonwebtoken')
const User = require('../models/user.js')

const jwtsecret = process.env.JWTSECRET

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, jwtsecret)
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
        if (!user) {
            throw new Error('User not found')
        }
        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(405).send(e)
    }
}

module.exports = auth
