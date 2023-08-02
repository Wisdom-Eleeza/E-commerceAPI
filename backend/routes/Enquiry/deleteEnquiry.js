const express = require("express");
const deleteEnquiry = require("../../controller.js/Enquiry/deleteEnquiry");
const authMiddleware = require("../../middleware/authMiddleware");
const isAdmin = require("../../middleware/authIsAdminMiddleware");

const router = express.Router();

router.delete("/:id", authMiddleware, isAdmin, deleteEnquiry);

module.exports = router;
