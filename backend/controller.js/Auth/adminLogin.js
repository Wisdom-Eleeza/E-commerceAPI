const { generateToken } = require("../../config/jwtToken");
const { userModel, isPasswordMatched } = require("../../models/userModel");
const asyncHandler = require("express-async-handler");
require("dotenv").config();

// @desc Login user
// @route POST /api/auth/login
// @access private
const adminLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const findAdmin = await userModel.findOne({ email });
  if (findAdmin.role !== "admin") throw new Error("Not Authorized");
  if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
    const refreshToken = await generateRefreshToken(findAdmin._id);
    const updateUser = await userModel.findByIdAndUpdate(
      findAdmin.id,
      {
        refreshToken: refreshToken,
      },
      { new: true }
    );
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
      token: generateToken(findAdmin._id),
    });     
  } else {
    throw new Error("Invalid Credetials");
  }
});

module.exports = adminLogin;
