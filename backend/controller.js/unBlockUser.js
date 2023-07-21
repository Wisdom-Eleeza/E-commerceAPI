const asyncHandler = require("express-async-handler");
const userModel = require("../models/userModel");
const validateMongoDbId = require("../utils/validateMongoDbId");
// @desc Register user
// @route POST /api/users/unblockuser
// @access Public
const UnblockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id)
  try {
    block = await userModel.findByIdAndUpdate(
      id,
      { isBlocked: false },
      { new: false }
    );
    res.json({ message: "User UnBlocked" });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = UnblockUser;
