const Color = require('../../models/colorModel');
const asyncHandler = require("express-async-handler");


const deleteColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deletedColor = await Color.findByIdAndDelete(id);
    res.json(deletedColor);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = deleteColor