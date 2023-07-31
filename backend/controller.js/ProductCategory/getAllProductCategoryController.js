const Category = require("../../models/ProductcategoryModel");
const asyncHandler = require("express-async-handler");

// @desc Get all categories
// @route POST /api/users/blog/get-all-categories
// @access Private (Only Admin can create a category)
const getallCategory = asyncHandler(async (req, res) => {
    try {
      const getallCategory = await Category.find();
      res.json(getallCategory);
    } catch (error) {
      throw new Error(error);
    }
  });

  module.exports = getallCategory