const express = require("express");
const updateColor = require("../../controller.js/Color/updateColor");
const authMiddleware = require("../../middleware/authMiddleware");
const isAdmin = require("../../middleware/authIsAdminMiddleware");
const router = express.Router();

router.put("/:id", authMiddleware, isAdmin, updateColor);

module.exports = router;
