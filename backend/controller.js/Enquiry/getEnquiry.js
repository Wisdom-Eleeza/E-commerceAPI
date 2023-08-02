const Enquiry = require("../../models/enquiryModel");
const asyncHandler = require("express-async-handler");

const getEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaEnquiry = await Enquiry.findById(id);
    res.json(getaEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = getEnquiry