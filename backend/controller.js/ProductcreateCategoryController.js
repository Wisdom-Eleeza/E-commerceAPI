const Category = require('../models/ProductcategoryModel');
const asyncHandler = require('express-async-handler');

// @desc Create a new category
// @route POST /api/users/blog/create-category
// @access Private (Only Admin can create a category)
const createCategory = asyncHandler(async (req, res) => {
    try {
        const newCategory = await Category.create(req.body);
        res.json(newCategory);
    } catch (error) {
        // Handle the error properly and return a meaningful response
        res.status(500).json({ success: false, message: "Failed to create category" });
    }
});

module.exports = createCategory;
