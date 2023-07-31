const Category = require("../models/BlogCategoryModel");
const asyncHandler = require("express-async-handler");

// @desc Update Blog Category
// @route PUT /api/users/blog/update-blog-category/:id
// @access Private (Only Admin can update a category)
const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedCategory);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = updateCategory;
