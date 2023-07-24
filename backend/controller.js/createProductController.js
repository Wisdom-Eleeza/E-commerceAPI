const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const slugify = require("slugify");

const createProduct = asyncHandler(async () => {
  try {
    if (req.body.title) req.body.slug = slugify(req.body.title);
    const createdProduct = await Product.create(req.body);
    res.json(createdProduct);
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = createProduct;
