const Coupon = require("../../models/couponModel");
const asyncHandler = require("express-async-handler");

// @desc Create a new blog category
// @route POST /api/users/blog/create-coupon
// @access Private (Only Admin can create a blog category)
const createCoupon = asyncHandler(async (req, res) => {
  try {
    const newCoupon = await Coupon.create(req.body);
    res.json(newCoupon);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = createCoupon
