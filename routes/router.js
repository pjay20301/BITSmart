const express = require('express')
const user = require('../controller/controller')
const customer = require('../controller/customer')
const vendor = require('../controller/vendor')
const deliveryPerson = require('../controller/deliveryPerson')
const auth = require('../middleware/auth.js')
const multer = require('multer')
const jsonParser = express.json()
const { GridFsStorage } = require('multer-gridfs-storage')
const crypto = require('crypto')
const path = require('path')
const router = express.Router()


var upload = multer({ dest: 'uploads/' })
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    },
})
// const storage = new GridFsStorage({
//     url: process.env.URI,
//     file: (req, file) => {
//         return new Promise((resolve, reject) => {
//             crypto.randomBytes(16, (err, buf) => {
//                 if (err) {
//                     return reject(err)
//                 }
//                 const filename =
//                     buf.toString('hex') + path.extname(file.originalname)
//                 const fileInfo = {
//                     filename: filename,
//                     bucketName: 'uploads',
//                 }
//                 resolve(fileInfo)
//             })
//         })
//     },
// })
var upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
}).single('image')

router.post('/api/signIn', jsonParser, user.signIn)

router.post('/api/signUp', jsonParser, user.signUp)

router.get('/api/signOut', auth, user.signOut)

router.post('/api/customer/signUp', jsonParser, customer.signUp)

router.post('/api/vendor/signUp', jsonParser, vendor.signUp)

router.post('/api/deliveryPerson/signUp', jsonParser, deliveryPerson.signUp)

router.post('/api/create', upload, jsonParser,  vendor.create)

router.get('/api/all', jsonParser, vendor.view)

router.get('/api/getRole/:email', jsonParser, user.getRole)

module.exports = router
