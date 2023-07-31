const Blog = require("../../models/blogModel");
const asyncHandler = require("express-async-handler");
const cloudinaryUploadImage = require("../../utils/cloudinary");
const fs = require("fs");

// @desc Update a user
// @route POST /api/users/upload-image/:id
// @access Public
const uploadImages = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const uploader = (path) => cloudinaryUploadImage(path, "images");
    const urls = [];
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newPath = await uploader(path);
      console.log(newPath);
      urls.push(newPath);
      fs.unlinkSync(path);
    }
    const findBlog = await Blog.findByIdAndUpdate(
      id,
      {
        images: urls,
      },
      {
        new: true,
      }
    );
    res.json(findBlog);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = uploadImages;
