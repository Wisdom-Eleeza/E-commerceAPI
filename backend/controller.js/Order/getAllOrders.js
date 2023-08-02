const OrderModel = require("../../models/OrderModel");
const asyncHandler = require('express-async-handler');

const getAllOrders = asyncHandler(async (req, res) => {
    try {
      const allUserOrders = await OrderModel.find()
        .populate("products.product")
        .populate("orderby")
        .exec();
      res.json(allUserOrders);
    } catch (error) {
      throw new Error(error);
    }
  });

  module.exports = getAllOrders