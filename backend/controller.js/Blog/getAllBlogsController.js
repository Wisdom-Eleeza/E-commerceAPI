const Blog = require("../../models/blogModel");
const asyncHandler = require("express-async-handler");

// @desc Forgot Password
// @route POST /api/users/blog/get-all-blog
// @access Private
const getAllBlogs = asyncHandler(async (req, res) => {
  try {
    const getBlogs = await Blog.find();
    res.json(getBlogs);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = getAllBlogs;
