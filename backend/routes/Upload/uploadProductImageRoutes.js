const express = require("express");
const uploadPhoto = require('../../controller.js/Product/');
const isAdmin = require("../../middleware/authIsAdminMiddleware");
const authMiddleware = require("../../middleware/authMiddleware");
const router = express.Router();

router.put("/:id", authMiddleware, isAdmin, uploadPhoto);

module.exports = router;
