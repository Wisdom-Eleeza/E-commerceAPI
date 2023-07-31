const Coupon = require("../../models/couponModel");
const asyncHandler = require("express-async-handler");

// @desc Create a new blog category
// @route DELETE /api/users/blog/delete-coupon
// @access Private (Only Admin can create a blog category)
const deleteCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deletecoupon = await Coupon.findByIdAndDelete(id);
    res.json(deletecoupon);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = deleteCoupon;
