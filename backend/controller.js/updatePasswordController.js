const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
// const validateMongoDbId = require("../utils/validateMongoDbId");


// @desc Register user
// @route POST /api/users/update-password/:id
// @access Private
const updateProduct = asyncHandler(async (req, res) => {
  try {
    const { _id } = req.user
    const password = req.body
    // validateMongoDbId
    if(password){
        user.password = password
        const updatedPassword = await user.save()
        res.json(updatedPassword)
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = updateProduct;
