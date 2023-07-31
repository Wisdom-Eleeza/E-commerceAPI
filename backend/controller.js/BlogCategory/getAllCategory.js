const Category = require("../models/BlogCategoryModel");
const asyncHandler = require("express-async-handler");

// @desc Fetch All Blog Categories
// @route GET /api/users/blog/fetch-all-blog-category
// @access Private (Only Admin can fetch all categories)
const getAllCategories = asyncHandler(async (req, res) => {
  try {
    const allCategories = await Category.find();
    res.json(allCategories);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = getAllCategories;
