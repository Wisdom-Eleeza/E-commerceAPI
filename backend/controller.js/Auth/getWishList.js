const { userModel } = require("../../models/userModel");
const asyncHandler = require("express-async-handler");

const getWishlist = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    try {
      const findUser = await userModel.findById(_id).populate("wishlist");
      res.json(findUser);
    } catch (error) {
      throw new Error(error);
    }
  });

  module.exports = getWishlist
