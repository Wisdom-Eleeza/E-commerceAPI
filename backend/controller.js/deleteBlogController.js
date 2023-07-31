const Blog = require("../models/blogModel");
const asyncHandler = require("express-async-handler");

// @desc Forgot Password
// @route DELETE /api/users/blog/delete-blog 
// @access Private (Only Admin can create a blog)
const deleteBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({ success: false, message: "Blog not found" });
    }

    res.json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = deleteBlog;
