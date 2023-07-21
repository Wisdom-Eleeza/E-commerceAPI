const { userModel, isPasswordMatched } = require("../models/userModel");
const asyncHandler = require("express-async-handler");

// @desc Logout user
// @route POST /api/auth/logout
// @access Public
const logOut = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie.refreshToken) throw new Error("No Refresh Token in the Cookies");
  const refreshToken = cookie.refreshToken;
  const user = await userModel.findOne({ refreshToken });

  if (user) {
    // Clear the refreshToken cookie
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
    });

    // Update the user's refreshToken to an empty string
    await userModel.findByIdAndUpdate(user._id, {
      refreshToken: "",
    });

    return res.status(204).json({ message: "Logout Successful" });
  } else {
    return res.sendStatus(403); // Forbidden - user not found
  }
});

module.exports = logOut;
