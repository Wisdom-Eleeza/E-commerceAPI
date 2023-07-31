const Category = require("../models/BlogCategoryModel");
const asyncHandler = require("express-async-handler");

// @desc Fetch Single Blog Category
// @route GET /api/users/blog/fetch-single-blog-category/:id
// @access Private (Only Admin can fetch a category)
const getCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getCategory = await Category.findById(id);
    res.json(getCategory);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = getCategory;
