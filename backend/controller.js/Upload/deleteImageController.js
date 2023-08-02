const fs = require("fs");
const cloudinaryDeleteImage = require('../../utils/cloudinaryDeleteImage')
const asyncHandler = require("express-async-handler");

const deleteImages = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = cloudinaryDeleteImage(id, "images");
    res.json({ message: "Image Deleted Successfully" });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = deleteImages