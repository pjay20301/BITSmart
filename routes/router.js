const express = require('express')
const user = require('../controller/controller')
const auth = require('../middleware/auth.js')

const jsonParser = express.json()

const router = express.Router()

router.post('/api/signIn', jsonParser, user.signIn)

router.post('/api/signUp', jsonParser, user.signUp)

router.get('/api/signOut', auth, user.signOut)

module.exports = router
