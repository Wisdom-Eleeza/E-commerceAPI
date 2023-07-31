const express = require("express");
const createProduct = require('../../controller.js/createProductController')
const isAdmin = require('../../middleware/authIsAdminMiddleware');
const authMiddleware = require("../../middleware/authMiddleware");
const router = express.Router()

router.post('/product', authMiddleware, isAdmin, createProduct)

module.exports = router
