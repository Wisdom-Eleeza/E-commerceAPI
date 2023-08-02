const CartModel = require("../../models/CartModel");
const { userModel } = require("../../models/userModel");
const asyncHandler = require("express-async-handler");
const uniqid = require('uniqid');
const OrderModel = require("../../models/OrderModel");

const createOrder = asyncHandler(async (req, res) => {
  const { COD, couponApplied } = req.body;
  const { _id } = req.user;

  try {
    if (!COD) {
      throw new Error("Create cash order failed");
    }

    const user = await userModel.findById(_id);
    let userCart = await CartModel.findOne({ orderby: user._id });
    let finalAmount = 0;

    if (couponApplied && userCart.totalAfterDiscount) {
      finalAmount = userCart.totalAfterDiscount;
    } else {
      finalAmount = userCart.cartTotal;
    }

    let newOrder = await new OrderModel({
      products: userCart.products,
      paymentIntent: {
        id: uniqid(), // Assuming uniqid() generates unique IDs
        method: "COD",
        amount: finalAmount,
        status: "Cash on Delivery",
        created: Date.now(),
        currency: "usd",
      },
      orderby: user._id,
      orderStatus: "Cash on Delivery",
    }).save();

    let update = userCart.products.map((item) => {
      return {
        updateOne: {
          filter: { _id: item.product._id },
          update: { $inc: { quantity: -item.count, sold: +item.count } },
        },
      };
    });

    const updated = await Product.bulkWrite(update, {});
    res.json({ message: "success" });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = createOrder;
