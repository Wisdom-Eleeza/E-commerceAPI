const express = require("express");
const getCoupon = require("../../controller.js/Coupon/getCouponController");
const authMiddleware = require("../../middleware/authMiddleware");
const isAdmin = require('../../middleware/authIsAdminMiddleware')
const router = express.Router();

router.get("/:id", authMiddleware, isAdmin, getCoupon);


module.exports = router;