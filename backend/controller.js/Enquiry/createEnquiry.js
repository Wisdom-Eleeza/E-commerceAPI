const Enquiry = require("../../models/enquiryModel");
const asyncHandler = require("express-async-handler");

const createEnquiry = asyncHandler(async (req, res) => {
  try {
    const newEnquiry = await Enquiry.create(req.body);
    res.json(newEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = createEnquiry