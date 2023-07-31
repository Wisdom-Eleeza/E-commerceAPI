const Blog = require("../../models/blogModel");
const asyncHandler = require("express-async-handler");

// @route POST /api/blogs/:blogId/dislike
// @desc Like a Blog Post
// @access Private
const dislikeTheBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.params; // Use req.params to get the blogId from URL params

  try {
    // Find the blog which you want to be disliked
    const blog = await Blog.findById(blogId);

    // find the login user ID
    const loginUserId = req.user._id;

    // find if the user has liked the blog
    const isDisLiked = blog.isLiked;

    // find if the user has disliked the blog
    const alreadyLiked = blog.likes.find(
      (userId) => userId.toString() === loginUserId.toString()
    );

    if (alreadyLiked) {
      // If the user has already liked the blog, remove user ID from likes and set isLiked to false
      const updatedBlog = await Blog.findByIdAndUpdate(
        blogId,
        {
          $pull: { likes: loginUserId },
          isLiked: false,
        },
        { new: true }
      );
      res.json(updatedBlog);
    } else {
      // Check if the user has already disliked the blog
      const alreadyDisliked = blog.dislikes.includes(loginUserId);

      if (alreadyDisliked) {
        // If the user has already disliked the blog, remove user ID from dislikes and set isDisliked to false
        const updatedBlog = await Blog.findByIdAndUpdate(
          blogId,
          { $pull: { dislikes: loginUserId }, isDisliked: false },
          { new: true }
        );
        res.json(updatedBlog);
      } else {
        // If the user has neither liked nor disliked the blog, add user ID to dislikes and set isDisliked to true
        const updatedBlog = await Blog.findByIdAndUpdate(
          blogId,
          { $push: { dislikes: loginUserId }, isDisliked: true },
          { new: true }
        );
        res.json(updatedBlog);
      }
    }
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = dislikeTheBlog;
