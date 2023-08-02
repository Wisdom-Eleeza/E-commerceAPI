const CartModel = require("../../models/CartModel");
const asyncHandler = require('express-async-handler')

const getUserCart = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    try {
      const cart = await CartModel.findOne({ orderby: _id }).populate(
        "products.product"
      );
      res.json(cart);
    } catch (error) {
      throw new Error(error);
    }
  });

  module.exports = getUserCart