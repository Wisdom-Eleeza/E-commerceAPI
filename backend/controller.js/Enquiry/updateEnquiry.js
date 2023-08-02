const Enquiry = require("../../models/enquiryModel");
const asyncHandler = require("express-async-handler");

const updateEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const updatedEnquiry = await Enquiry.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = updateEnquiry;
