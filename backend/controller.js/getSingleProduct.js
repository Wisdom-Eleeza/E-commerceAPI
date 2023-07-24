const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const slugify = require('slugify')

const singleProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    const getSingleProduct = await Product.findById(id);
    res.json(getSingleProduct);
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = singleProduct;
