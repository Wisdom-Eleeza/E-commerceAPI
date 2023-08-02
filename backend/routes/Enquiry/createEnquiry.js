const express = require("express");
const createEnquiry = require('../../controller.js/Enquiry/createEnquiry')
const updateEnquiry = require('../../controller.js/Enquiry/updateEnquiry')
const deleteEnquiry = require('../../controller.js/Enquiry/deleteEnquiry')
const getEnquiry = require('../../controller.js/Enquiry/getEnquiry')
const getAllEnquiry = require('../../controller.js/Enquiry/getAllEnquiry');
const authMiddleware = require("../../middleware/authMiddleware");
const isAdmin = require("../../middleware/authIsAdminMiddleware");

const router = express.Router();

router.post("/", createEnquiry);
router.put("/:id", authMiddleware, isAdmin, updateEnquiry);
router.delete("/:id", authMiddleware, isAdmin, deleteEnquiry);
router.get("/:id", getEnquiry);
router.get("/", getAllEnquiry);

module.exports = router;