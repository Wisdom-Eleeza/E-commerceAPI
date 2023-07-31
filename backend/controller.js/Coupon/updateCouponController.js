const Coupon = require("../../models/couponModel");
const asyncHandler = require("express-async-handler");

// @desc Create a new blog category
// @route PUT /api/users/blog/update-coupon
// @access Private (Only Admin can create a blog category)
const updateCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const updateCoupon = await Coupon.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateCoupon);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = updateCoupon;
