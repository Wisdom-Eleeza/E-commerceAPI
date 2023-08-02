const CartModel = require("../../models/CartModel");
const couponModel = require("../../models/couponModel");
const { userModel } = require("../../models/userModel");

const applyCoupon = asyncHandler(async (req, res) => {
  const { coupon } = req.body;
  const { _id } = req.user;
  const validCoupon = await couponModel.findOne({ name: coupon });
  if (validCoupon === null) {
    throw new Error("Invalid Coupon");
  }
  const user = await userModel.findById({ _id });
  let { cartTotal } = await Cart.findOne({
    orderby: user._id,
  }).populate("products.product");
  let totalAfterDiscount = (
    cartTotal -
    (cartTotal * validCoupon.discount) / 100
  ).toFixed(2);
  await CartModel.findOneAndUpdate(
    { orderby: user._id },
    { totalAfterDiscount },
    { new: true }
  );
  res.json(totalAfterDiscount);
});

module.exports = applyCoupon;
