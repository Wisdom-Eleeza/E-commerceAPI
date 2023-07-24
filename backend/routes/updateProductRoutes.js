const express = require("express");
const updateProduct = require('../controller.js/updateProductController')
const isAdmin = require('../middleware/authIsAdminMiddleware');
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.put("/:id", authMiddleware, isAdmin, updateProduct);

module.exports = router;
