const express = require("express");
const getAllCoupon = require("../../controller.js/Coupon/getAllCouponController");
const authMiddleware = require("../../middleware/authMiddleware");
const isAdmin = require('../../middleware/authIsAdminMiddleware')
const router = express.Router();

router.get("/", authMiddleware, isAdmin, getAllCoupon);


module.exports = router;