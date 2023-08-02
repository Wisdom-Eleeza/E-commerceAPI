const CartModel = require("../../models/CartModel");
const userModel = require("../../models/userModel");
const asyncHandler = require('express-async-handler')


const emptyCart = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    try {
      const user = await userModel.findOne({ _id });
      const cart = await CartModel.findOneAndRemove({ orderby: user._id });
      res.json(cart);
    } catch (error) {
      throw new Error(error);
    }
  });

  module.exports = emptyCart