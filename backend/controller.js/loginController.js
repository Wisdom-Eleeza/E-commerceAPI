const { generateToken } = require("../config/jwtToken");
const { userModel, isPasswordMatched } = require("../models/userModel");
const asyncHandler = require("express-async-handler");
require("dotenv").config();

// @desc Login user
// @route POST /api/auth/login
// @access Public
const login = asyncHandler(async (req, res) => {
  const { id, email, password } = req.body;
  const findUser = await userModel.findOne({ email });

  if (findUser && (await findUser.isPasswordMatched(password))) {
    res.status(200).json({
      success: true,
      id: id,
      firstname: findUser?.firstname,
      lastname: findUser?.lastname,
      email: findUser?.email,
      mobile: findUser?.mobile,
      password: findUser?.password,
      token: generateToken(findUser?.id),
    });
  } else {
    throw new Error("Invalid Credentials");
  }
});

module.exports = login;
