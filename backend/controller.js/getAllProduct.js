const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
// const slugify = require("slugify");

const allProduct = asyncHandler(async (req, res) => {
  try {
    // filtering

    const queryObj = { ...req.query };
    console.log("queryObj::", queryObj);
    console.log("req.query::", req.query);
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((e) => delete queryObj[e]);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    let query = Product.find(JSON.parse(queryStr));

    // Sorting

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else { 
      query = query.sort("-createdAt");
    }

    // limiting the fields

    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    // pagination

    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);
    if (req.query.page) {
      const productCount = await Product.countDocuments();
      if (skip >= productCount) throw new Error("This Page does not exists");
    }
    const product = await query;
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = allProduct;
