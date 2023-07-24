const asyncHandler = require("express-async-handler");
const { userModel } = require("../models/userModel");

// @desc Register user
// @route POST /api/users/update-a-user
// @access Public
const updateAUser = asyncHandler(async (req, res) => {
  try {
    const id = req.user; // getting the id from the middleware in the req.user
    // validateMongoDbId(id)
    const updateAUser = await userModel.findByIdAndUpdate(
      id,
      {
        firstname: req?.body.firstname,
        lastname: req?.body.lastname,
        email: req?.body.email,
        mobile: req?.body.mobile,
      },
      { new: true }
    );
    res.status(200).json({ success: true, updateAUser });
  } catch (error) {
    throw new Error(error);
  } // Bertha@Akua@Okantu@2022
});

module.exports = updateAUser;
