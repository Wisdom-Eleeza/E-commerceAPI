const express = require("express");
const getAllEnquiry = require('../../controller.js/Enquiry/getAllEnquiry');

const router = express.Router();

router.get("/", getAllEnquiry);

module.exports = router;