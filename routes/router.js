const express = require('express')
const user = require('../controller/controller')
const customer = require('../controller/customer')
const vendor = require('../controller/vendor')
const deliveryPerson = require('../controller/deliveryPerson')
const admin = require('../controller/admin')
const auth = require('../middleware/auth.js')
const jsonParser = express.json()
const router = express.Router()
const upload = require('../utils/multer')

router.post('/api/signIn', jsonParser, user.signIn)

router.post('/api/signUp', jsonParser, user.signUp)

router.get('/api/signOut', auth, user.signOut)

router.post('/api/customer/signUp/:id', jsonParser, customer.signUp)

router.post('/api/vendor/signUp/:id', jsonParser, vendor.signUp)

router.post('/api/deliveryPerson/signUp/:id', jsonParser, deliveryPerson.signUp)

router.post('/api/create/:id', upload.single('image') , jsonParser,  vendor.create)

router.get('/api/all', jsonParser, vendor.view)

router.get('/api/getUser/:id', user.getUser)

router.put('/api/acceptVendor/:id', jsonParser, admin.acceptVendor)

router.put('/api/rejectVendor/:id', jsonParser, admin.rejectVendor)

router.get('/api/getRequest', admin.getRequest)

module.exports = router
