const express = require("express");
const createProduct = require('../controller.js/productController')
const router = express.Router()

router.post('/product/', createProduct)

module.exports = router
