const { userModel } = require("../../models/userModel");
const asyncHandler = require("express-async-handler");

const deleteAUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    await userModel.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "User Deleted Successfully" });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = deleteAUser;
