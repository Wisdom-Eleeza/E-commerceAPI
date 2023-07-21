const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { userModel } = require("../models/userModel");
const { generateToken } = require("../config/jwtToken");

// @desc Handling Refresh Token
// @route POST /api/users/refresh
// @access Public
const handleRefreshToken = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  console.log("cookie", cookie);
  if (!cookie.refreshToken) throw new Error(error);
  const refreshToken = cookie.refreshToken;
  console.log("refreshToken", refreshToken);
  const user = await userModel.findOne({ refreshToken });
  if (!user)
    throw new Error(
      "No Refresh Token Present in the Database, Refresh Token Does not matched"
    );
  jwt.verify(refreshToken.process.env.JWT_SECRET, (err, decoded) => {
    if (err || user.id !== decoded.id)
      throw new Error("There is something wrong with the refresh token");
    const accessToken = generateToken(user.id);
    res.json({ accessToken });
  });
});

module.exports = handleRefreshToken;
