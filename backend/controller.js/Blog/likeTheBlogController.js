const Blog = require("../../models/blogModel");
const asyncHandler = require("express-async-handler");
// The functionality toggles the like status of a blog post for a logged-in user.

// @route POST /api/blogs/:blogId/like
// @desc Like a Blog Post
// @access Private
const likeTheBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.body;

  try {
    // Find the blog which the user would like
    const blog = await Blog.findById(blogId);

    // Find the login user ID
    const loginUserId = req.user._id;

    // // Find if the user has liked the blog
    const isLiked = blog.isLiked;

    // Check if the user has already disliked the blog
    const alreadyDisliked = blog.dislikes.find(
      (userId) => userId.toString() === loginUserId.toString()
    );

    if (alreadyDisliked) {
      // Remove user ID from dislikes and set isDisliked to false
      const updatedBlog = await Blog.findByIdAndUpdate(
        blogId,
        {
          $pull: { dislikes: loginUserId },
          isDisliked: false,
        },
        { new: true }
      );
      res.json(updatedBlog);
    } else {
      // Check if the user has already liked the blog
      const isLiked = blog.likes.includes(loginUserId);

      if (isLiked) {
        // Remove user ID from likes
        const updatedBlog = await Blog.findByIdAndUpdate(
          blogId,
          { $pull: { likes: loginUserId } },
          { new: true }
        );
        res.json(updatedBlog);
      } else {
        // Add user ID to likes and set isLiked to true
        const updatedBlog = await Blog.findByIdAndUpdate(
          blogId,
          {
            $push: { likes: loginUserId },
            isLiked: true,
          },
          { new: true }
        );
        res.json(updatedBlog);
      }
    }
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = likeTheBlog;
