const express = require("express");
const updateEnquiry = require('../../controller.js/Enquiry/updateEnquiry')
const authMiddleware = require("../../middleware/authMiddleware");
const isAdmin = require("../../middleware/authIsAdminMiddleware");

const router = express.Router();

router.put("/:id", authMiddleware, isAdmin, updateEnquiry);

module.exports = router;