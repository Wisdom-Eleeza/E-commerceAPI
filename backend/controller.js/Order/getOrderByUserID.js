const OrderModel = require("../../models/OrderModel");
const asyncHandler = require("express-async-handler");

const getOrderByUserId = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const userOrders = await OrderModel.findOne({ orderby: id })
      .populate("products.product")
      .populate("orderby")
      .exec();
    res.json(userOrders);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = getOrderByUserId;
