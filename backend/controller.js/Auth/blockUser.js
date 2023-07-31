const asyncHandler = require("express-async-handler");
const userModel = require("../../models/userModel");
const validateMongoDbId = require("../../utils/validateMongoDbId");

// @desc Register user
// @route POST /api/users/blockuser
// @access Public
const blockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    block = await userModel.findByIdAndUpdate(
      id,
      { isBlocked: false },
      { new: true }
    );
    res.json({ message: "User Blocked" });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = blockUser;
