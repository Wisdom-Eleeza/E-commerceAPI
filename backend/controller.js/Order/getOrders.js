const OrderModel = require("../../models/OrderModel");
const asyncHandler = require('express-async-handler')


const getOrders = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDbId(_id);
    try {
      const userOrders = await OrderModel.findOne({ orderby: _id })
        .populate("products.product")
        .populate("orderby")
        .exec();
      res.json(userOrders);
    } catch (error) {
      throw new Error(error);
    }
  });
  module.export = getOrders