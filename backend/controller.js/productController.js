const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

const createProduct = asyncHandler(async () => {
  try {
    const Product = await Product.create(req.body);
    res.json(Product);
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = createProduct;
