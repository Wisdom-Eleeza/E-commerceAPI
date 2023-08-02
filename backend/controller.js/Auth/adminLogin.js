const { generateToken } = require("../../config/jwtToken");
const { generateRefreshToken } = require("../../config/refreshToken");
const { userModel, isPasswordMatched } = require("../../models/userModel");
const asyncHandler = require("express-async-handler");
require("dotenv").config();

// Admin Login
const adminLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const findAdmin = await userModel.findOne({ email });
  if (findAdmin.role !== "admin") {
    throw new Error("Not Authorized");
  }
  if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
    // Generate and set refreshToken (you can implement the generateRefreshToken function)
    const refreshToken = await generateRefreshToken(findAdmin._id);
    findAdmin.refreshToken = refreshToken;
    await findAdmin.save();

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.json({
      _id: findAdmin._id,
      firstname: findAdmin.firstname,
      lastname: findAdmin.lastname,
      email: findAdmin.email,
      mobile: findAdmin.mobile,
      role: findAdmin.role,
      token: generateToken(findAdmin._id),
    });
  } else {
    throw new Error("Invalid Credentials");
  }
});

module.exports = adminLogin;
