const Blog = require("../models/blogModel");
const userModel = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const cloudinaryUploadImage = require("../utils/cloudinary");
const fs = require("fs");

const createBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getBlog = await Blog.findById(id)
      .populate("likes")
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
    res.json(getBlog, updateViews)
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = createBlog;
