const userModel = require("../../models/userModel");
const asyncHandler = require('express-async-handler')

const saveAddress = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  try {
    const updateAUser = await userModel.findByIdAndUpdate(
      _id,
      { address: req.body.address },
      { new: true }
    );
    res.json(updateAUser);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = saveAddress;
