const express = require("express");
const deleteBlogCategory = require("../../controller.js/BlogCategory/deleteCategory");
const authMiddleware = require('../../middleware/authMiddleware');
const isAdmin = require("../../middleware/authIsAdminMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, deleteBlogCategory);

module.exports = router;
