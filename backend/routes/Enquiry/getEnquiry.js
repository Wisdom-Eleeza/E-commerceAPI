const express = require("express");
const getEnquiry = require('../../controller.js/Enquiry/getEnquiry')

const router = express.Router();

router.get("/:id", getEnquiry);

module.exports = router;