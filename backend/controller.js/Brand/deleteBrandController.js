const Brand = require("../../models/brandModel");
const asyncHandler = require("express-async-handler");

// @desc Create a new blog category
// @route DELETE /api/users/blog/delete-brand
// @access Private (Only Admin can create a blog category)
const deleteBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedBrand = await Brand.findByIdAndDelete(id);
    res.json(deletedBrand);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = deleteBrand;
