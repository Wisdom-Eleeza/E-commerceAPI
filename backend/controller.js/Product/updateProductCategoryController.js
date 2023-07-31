const asyncHandler = require("express-async-handler");
const Category = require('../models/updateProductcategoryController')

const updateProductCategory = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedCategory);
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = updateProductCategory;
