const Category = require("../models/BlogCategoryModel");
const asyncHandler = require("express-async-handler");

// @desc Create a new blog category
// @route POST /api/users/blog/create-blog-category
// @access Private (Only Admin can create a blog category)
const createCategory = asyncHandler(async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.json(newCategory);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = createCategory;
