const Brand = require("../../models/brandModel");
const asyncHandler = require("express-async-handler");

// @desc Create a new blog category
// @route GET /api/users/blog/fetch-all-brand
// @access Private (Only Admin can create a blog category)
const getallBrand = asyncHandler(async (req, res) => {
    try {
      const getallBrand = await Brand.find();
      res.json(getallBrand);
    } catch (error) {
      throw new Error(error);
    }
  });

  module.exports = getallBrand