const express = require('express')
const auth = require('../controller.js/auth')
const login = require('../controller.js/login')
const router = express.Router()


router.post('/register', auth)
router.post('/login', login)

module.exports = router