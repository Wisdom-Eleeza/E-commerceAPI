const jwt = require("jsonwebtoken");
const { userModel } = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded?.id);
        req.user = user
        next()
      }
    } catch (error) {
      throw new Error("Unauthorized: Token expired, Please Login Again");
    }
  } else {
    throw new Error("There is no token attached to the header");
  }
});

const isAdmin = asyncHandler( async(req, res, next) => {
  console.log("req.user::", req.user)
})

module.exports = authMiddleware;
