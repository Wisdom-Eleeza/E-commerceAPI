const express = require("express");
const GetSingleProduct = require("../../controller.js/Product/getSingleProduct");
const isAdmin = require("../../middleware/authIsAdminMiddleware");
const authMiddleware = require("../../middleware/authMiddleware");
const router = express.Router();

router.get("/single-product/:id", authMiddleware, isAdmin, GetSingleProduct);

module.exports = router;
