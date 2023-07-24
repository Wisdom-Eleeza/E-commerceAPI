const express = require('express')
const allProduct = require('../controller.js/getAllProduct')
const router = express.Router()


router.get('/get-all-product/:id', allProduct)

module.exports = router