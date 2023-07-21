const express = require('express')
const registerUser = require('../controller.js/userController')
const logOut = require('../controller.js/logoutController')
const router = express.Router()


router.post('/logout', logOut)

module.exports = router