const Brand = require("../../models/brandModel");
const asyncHandler = require("express-async-handler");

// @desc Create a new blog category
// @route GET /api/users/blog/get-brand
// @access Private (Only Admin can create a blog category)
const getBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaBrand = await Brand.findById(id);
    res.json(getaBrand);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = getBrand;
