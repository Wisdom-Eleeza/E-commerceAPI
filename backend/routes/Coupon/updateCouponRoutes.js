const express = require("express");
const updateCoupon = require("../../controller.js/Coupon/updateCouponController");
const authMiddleware = require("../../middleware/authMiddleware");
const isAdmin = require('../../middleware/authIsAdminMiddleware')
const router = express.Router();

router.put("/:id", authMiddleware, isAdmin, updateCoupon);

module.exports = router;