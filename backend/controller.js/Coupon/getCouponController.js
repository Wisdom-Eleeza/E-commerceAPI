const Coupon = require("../../models/couponModel");
const asyncHandler = require("express-async-handler");

// @desc Create a new blog category
// @route POST /api/users/blog/fetch-coupon
// @access Private (Only Admin can create a blog category)
const getCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getACoupon = await Coupon.findById(id);
    res.json(getACoupon);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = getCoupon;
