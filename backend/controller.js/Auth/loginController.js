const { generateToken } = require("../../config/jwtToken");
const { generateRefreshToken } = require("../../config/refreshToken");
const { userModel, isPasswordMatched } = require("../../models/userModel");
const asyncHandler = require("express-async-handler");
require("dotenv").config();

// @desc Login user
// @route POST /api/auth/login
// @access Public
// User Login
const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const findUser = await userModel.findOne({ email });

  if (findUser && (await findUser.isPasswordMatched(password))) {
    // Generate and set refreshToken (you can implement the generateRefreshToken function)
    const refreshToken = await generateRefreshToken(findUser._id);
    findUser.refreshToken = refreshToken;
    await findUser.save();

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.status(200).json({
      success: true,
      id: findUser._id,
      firstname: findUser.firstname,
      lastname: findUser.lastname,
      email: findUser.email,
      mobile: findUser.mobile,
      role: findUser.role,
      token: generateToken(findUser._id),
    });
  } else {
    throw new Error("Invalid Credentials");
  }
});

module.exports = userLogin;
