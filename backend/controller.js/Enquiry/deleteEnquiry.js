const Enquiry = require("../../models/enquiryModel");
const asyncHandler = require("express-async-handler");

const deleteEnquiry = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deletedEnquiry = await Enquiry.findByIdAndDelete(id);
    res.json(deletedEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = deleteEnquiry