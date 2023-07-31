const Blog = require("../../models/blogModel");
const asyncHandler = require("express-async-handler");

// @desc Forgot Password
// @route POST /api/users/blog/create-blog
// @access Private (Only Admin can create a blog)
const createBlog = asyncHandler(async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.json(newBlog);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = createBlog;
