const Blog = require("../models/blogModel");
const asyncHandler = require("express-async-handler");

// @desc Forgot Password
// @route POST /api/users/blog/get-a-blog
// @access Private (Only Admin can create a blog)
const getABlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getBlog = await Blog.findById(id)
      .populate("likes") // populating the blog table with the likes table and dislike table
      .populate("dislikes");
    const updateViews = await Blog.findByIdAndUpdate(
      id,
      {
        $inc: { numViews: 1 },
      },
      {
        new: true,
      }
    );
    res.json(getBlog, updateViews);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = getABlog;
// the populate function in Mongoose is used to "populate" or "link"
// data from referenced collections into the current collection.
/*
In this case, when you use populate("likes") and populate("dislikes"), 
it means that the likes and dislikes fields in the Blog collection 
are being populated with data from the referenced collections.
*/
