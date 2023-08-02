const express = require("express");
const deleteColor = require('../../controller.js/Color/deleteColor')
const authMiddleware = require('../../middleware/authMiddleware')
const isAdmin = require("../../middleware/authIsAdminMiddleware");
const router = express.Router();

router.delete("/:id", authMiddleware, isAdmin, deleteColor);

module.exports = router;