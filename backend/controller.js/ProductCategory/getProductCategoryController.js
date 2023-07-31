const Category = require("../../models/ProductcategoryModel");
const asyncHandler = require("express-async-handler");

// @desc Create a new category
// @route POST /api/users/blog/create-category
// @access Private (Only Admin can create a category)
const getCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaCategory = await Category.findById(id);
    res.json(getaCategory);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = getCategory;
