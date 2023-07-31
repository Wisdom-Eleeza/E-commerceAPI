const Coupon = require("../../models/couponModel");
const asyncHandler = require("express-async-handler");

// @desc Create a new blog category
// @route GET /api/users/blog/fetch-all-coupon
// @access Private (Only Admin can create a blog category)
const getAllCoupons = asyncHandler(async (req, res) => {
    try {
      const coupons = await Coupon.find();
      res.json(coupons);
    } catch (error) {
      throw new Error(error);
    }
  });
  module.exports = getAllCoupons
  