const asyncHandler = require("express-async-handler");
const { userModel } = require("../../models/userModel");

// @desc Get a single user by ID
// @route GET /api/users/single-user/:id
// @access Public
const getAUser = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;
    const getSingleUser = await userModel.findById(id);

    if (!getSingleUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, getSingleUser });
  } catch (error) {
    // Pass the error to the error handling middleware using next()
    // next(error);
    throw new Error(error)
  }
});

module.exports = getAUser;
