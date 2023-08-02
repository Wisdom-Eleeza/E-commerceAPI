const express = require("express");
const applyCoupon = require("../../controller.js/Coupon/applyCoupon");
const authMiddleware = require("../../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, applyCoupon);

module.exports = router;