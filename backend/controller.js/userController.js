const cryptoJs = require("crypto-js");
const { userModel } = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../config/jwtToken");

// @desc Update user
// @route PUT /api/users/register
// @access Private
const registerUser = asyncHandler(async (req, res) => {
  const { id, email, firstname, lastname, mobile, password } = req.body;
  const findUser = await userModel.findOne({ email });

  if (findUser) {
    return res.status(409).json({
      success: false,
      message: "User already exists",
    });
  }

  const newUser = new userModel({
    id: id,
    firstname: firstname,
    lastname: lastname,
    email: email,
    mobile: mobile,
    password: password,
  });

  await newUser.save();

  res
    .status(200)
    .json({ success: true, newUser, message: "User Created Successfully..." });
});

module.exports = registerUser;
