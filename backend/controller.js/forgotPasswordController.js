const asyncHandler = require("express-async-handler");
const userModel = require("../models/userModel");
const sendEmail = require("./emailController");

// @desc Forgot Password
// @route POST /api/users/forgot-password
// @access Public
const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  try {
    // Find the user by their email
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Generate a password reset token and save it to the user
    const token = await user.createPasswordResetToken();
    await user.save();

    // Create the reset password link to be sent in the email
    const resetLink = `Please follow this link to reset your password. This link is valid for 10 minutes from now. 
    <a href='http://localhost:5000/api/users/reset-password/${token}'>Click Here</a>`;

    // Prepare email data
    const emailData = {
      to: email,
      subject: "Forgot Password Link",
      html: resetLink,
    };

    // Send the email
    await sendEmail(emailData);

    res.json({ success: true, message: "Password reset link sent successfully" });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = forgotPassword;
