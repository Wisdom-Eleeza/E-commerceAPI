const { userModel } = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const isAdmin = asyncHandler(async (req, res, next) => {
  // console.log("req.user::", req.user);
  const email = req.user;
  const adminUser = await userModel.findOne({ email });

  // Check if adminUser exists and its role is 'admin' (case-insensitive comparison)
  if (adminUser && adminUser.role.toLowerCase() === "admin") {
    next(); // If the user is an admin, proceed to the next middleware or route handler
  } else {
    throw new Error("You are not an Admin");
  }
});

module.exports = isAdmin;
