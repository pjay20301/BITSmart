const express = require('express')
const user = require('../controller/controller')
const customer = require('../controller/customer')
const vendor = require('../controller/vendor')
const auth = require('../middleware/auth.js')

const jsonParser = express.json()

const router = express.Router()

router.post('/api/signIn', jsonParser, user.signIn)

router.post('/api/signUp', jsonParser, user.signUp)

router.get('/api/signOut', auth, user.signOut)

router.post('/api/customer/signUp', jsonParser, customer.signUp)

router.post('/api/vendor/signUp', jsonParser, vendor.signUp)

// router.post('/api/deliveryPerson/signUp', jsonParser, user.deliveryPersonSignUp)


module.exports = router
