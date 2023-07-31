const Product = require("../../models/productModel");
const asyncHandler = require("express-async-handler");

// @desc Register user
// @route DELETE /api/users/product/delete-product-category/:id
// @access Private
const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, deleteProduct });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = deleteProduct;
