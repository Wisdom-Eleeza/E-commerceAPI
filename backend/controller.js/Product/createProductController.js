const asyncHandler = require("express-async-handler");
const Product = require("../../models/productModel");
const slugify = require("slugify");

// @desc Register user
// @route POST /api/users/product/create-product-category
// @access Private
const createProduct = asyncHandler(async (res, req) => {
  try {
    if (req.body.title) req.body.slug = slugify(req.body.title);
    const createdProduct = await Product.create(req.body);
    res.json(createdProduct);
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = createProduct;
