const express = require("express");
const deleteCoupon = require("../../controller.js/Coupon/deleteCouponController");
const authMiddleware = require("../../middleware/authMiddleware");
const isAdmin = require('../../middleware/authIsAdminMiddleware')
const router = express.Router();

router.delete("/:id", authMiddleware, isAdmin, deleteCoupon);

module.exports = router;