const Blog = require("../models/blogModel");
const userModel = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const cloudinaryUploadImage = require("../utils/cloudinary");
const fs = require("fs");

const createBlog = asyncHandler(async (req, res) => {
  try {
    const getBlogs = await Blog.find()
    res.json(getBlogs)
  } catch (error) {
    throw new Error(error)
  }
});

module.exports = createBlog;
