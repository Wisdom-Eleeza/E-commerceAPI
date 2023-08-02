const asyncHandler = require('express-async-handler');
const OrderModel = require('../../models/OrderModel');

const updateOrderStatus = asyncHandler(async (req, res) => {
    const { status } = req.body;
    const { id } = req.params;
    try {
      const updateOrderStatus = await OrderModel.findByIdAndUpdate(
        id,
        {
          orderStatus: status,
          paymentIntent: {
            status: status,
          },
        },
        { new: true }
      );
      res.json(updateOrderStatus);
    } catch (error) {
      throw new Error(error);
    }
  });

  module.exports =updateOrderStatus