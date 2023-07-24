const asyncHandler = require("express-async-handler");
const { userModel } = require("../models/userModel");
// const validateMongoDbId = require("../utils/validateMongoDbId");

// @desc Register user
// @route POST /api/users/single-user/:id
// @access Public
const getAUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    // validateMongoDbId(id)
    const getSingleUser = await userModel.findById(id);
    res.status(200).json({ getSingleUser });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = getAUser;
