const Color = require('../../models/colorModel');
const asyncHandler = require("express-async-handler");

const updateColor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const updatedColor = await Color.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedColor);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = updateColor