const express = require('express')
const registerUser = require('../controller.js/userController')
const login = require('../controller.js/loginController')
const router = express.Router()


router.post('/register', registerUser)
router.post('/login', login)

module.exports = router