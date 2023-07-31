const Blog = require("../../models/blogModel");
const asyncHandler = require("express-async-handler");

// @desc Forgot Password
// @route PUT /api/users/blog/update-blog
// @access Private (Only Admin can update a blog)
const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const updateBlog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateBlog);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = updateBlog;
