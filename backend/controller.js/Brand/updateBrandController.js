const Brand = require("../../models/brandModel");
const asyncHandler = require("express-async-handler");

// @desc Create a new blog category
// @route UPDATE /api/users/blog/update-brand/:id
// @access Private (Only Admin can create a blog category)
const updateBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBrand = await Brand.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedBrand);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = updateBrand;
