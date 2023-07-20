const asyncHandler = require("express-async-handler");
const userModel = require("../models/userModel");

// @desc Register user
// @route POST /api/users/single-user
// @access Public
const getAUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const getSingleUser = await userModel.findById(id);
    res.status(200).json({ getSingleUser });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = getAUser;
