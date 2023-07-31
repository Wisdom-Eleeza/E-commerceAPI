const Category = require("../../models/ProductcategoryModel");
const asyncHandler = require("express-async-handler");

// @desc Delete a category
// @route DELETE /api/users/blog/delete-category/:id
// @access Private (Only Admin can delete a category)
const createCategory = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCategory = await Category.findByIdAndDelete(id);
    res.json(deletedCategory);
  } catch (error) {
    // Handle the error properly and return a meaningful response
    res
      .status(500)
      .json({ success: false, message: "Failed to create category" });
  }
});

module.exports = createCategory;
