const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const slugify = require("slugify");


// @desc Register user
// @route POST /api/users/update-product/:id
// @access Private
const updateProduct = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) req.body.slug = slugify(req.body.title);
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedProduct);
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = updateProduct;
