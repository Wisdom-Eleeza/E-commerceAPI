const asyncHandler = require("express-async-handler");
const userModel = require("../../models/userModel");
const crypto = require("crypto");

// @desc Register user
// @route POST /api/users/reset-password
// @access Private
const resetPassword = asyncHandler(async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  const user = await userModel.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  if (!user) throw new Error(" Token Expired, Please try again later");
  user.password = password;
  (user.passwordResetToken = undefined),
    (user.passwordResetExpires = undefined), // undefined because password is changed
    await user.save();
  res.json(user);
});

module.exports = resetPassword;
