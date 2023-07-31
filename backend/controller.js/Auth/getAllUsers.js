const asyncHandler = require("express-async-handler");
const { userModel } = require("../../models/userModel");

// @desc Register user
// @route POST /api/users/all-users
// @access Public
const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const getUsers = await userModel.find();
    res.status(200).json({ success: true, getUsers });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = getAllUsers;
