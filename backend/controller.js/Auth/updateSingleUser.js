const asyncHandler = require("express-async-handler");
const userModel = require("../../models/userModel");


// @desc Update a user
// @route PUT /api/users/:id
// @access Public
const updateAUser = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id; // Assuming you're passing the user ID as a URL parameter (e.g., /api/users/123)
    // Validate if the provided ID is a valid MongoDB ObjectId before proceeding (optional)
    // You can use a separate function to do this validation or use a library like mongoose.Types.ObjectId.isValid()

    const updatedUserData = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      mobile: req.body.mobile,
    };

    const updateAUser = await userModel.findByIdAndUpdate(
      id,
      updatedUserData,
      { new: true }
    );

    if (!updateAUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, updateAUser });
  } catch (error) {
    // If an error occurs during the update process or if the ID is not a valid ObjectId
    // it will be caught here and handled appropriately.
    console.error("Error updating user:", error);
    res.status(500).json({ success: false, message: "Error updating user" });
  }
});

module.exports = updateAUser;
