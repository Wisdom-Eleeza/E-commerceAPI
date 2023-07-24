const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");
// const validateMongoDbId = require("../utils/validateMongoDbId");

// @desc Register user
// @route POST /api/users/all-users
// @access Public
const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    // validateMongoDbId(id)
    const deleteProduct = await Product.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, deleteProduct });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = deleteProduct;
