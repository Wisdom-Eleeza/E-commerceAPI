const Category = require("../models/BlogCategoryModel");
const asyncHandler = require("express-async-handler");

// @desc Delete Blog Category
// @route DELETE /api/users/blog/delete-blog-category/:id
// @access Private (Only Admin can delete a blog category)
const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCategory = await Category.findByIdAndDelete(id);
    res.json(deletedCategory);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = deleteCategory;
