const asyncHandler = require("express-async-handler");
const userModel = require("../models/userModel");

const blockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    block = userModel.findByIdAndUpdate(id, { isBlocked: true }, { new: true });
  } catch (error) {
    throw new Error(error)
  }
});
