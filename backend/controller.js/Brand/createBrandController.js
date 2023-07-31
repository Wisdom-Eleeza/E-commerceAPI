const Brand = require("../../models/brandModel");
const asyncHandler = require("express-async-handler");

// @desc Create a new blog category
// @route POST /api/users/blog/create-brand
// @access Private (Only Admin can create a blog category)
const createBrand = asyncHandler(async (req, res) => {
  try {
    const newBrand = await Brand.create(req.body);
    res.json(newBrand);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = createBrand