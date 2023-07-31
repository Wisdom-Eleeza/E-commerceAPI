const express = require("express");
const createCoupon = require("../../controller.js/Coupon/createCouponController");
const authMiddleware = require("../../middleware/authMiddleware");
const isAdmin = require('../../middleware/authIsAdminMiddleware')
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createCoupon);

module.exports = router;