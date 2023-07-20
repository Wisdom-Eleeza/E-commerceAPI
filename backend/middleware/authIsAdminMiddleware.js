const jwt = require("jsonwebtoken");
const { userModel } = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const authMiddleware = require("../middleware/authMiddleware");

const isAdmin = asyncHandler(async (req, res, next) => {
  console.log("req.user::", req.user);
  const { email } = req.user;
  const adminUser = await userModel.findOne({ email });
  if (adminUser.role !== "admin") {
    throw new Error("You are not an Admin");
  } else {
    next()
  }
});

module.exports = isAdmin;
