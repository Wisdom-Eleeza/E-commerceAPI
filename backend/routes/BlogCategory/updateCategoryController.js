const express = require("express");
const updateBlogCategory = require("../../controller.js/BlogCategory/updateCategory");
const authMiddleware = require('../../middleware/authMiddleware');
const isAdmin = require("../../middleware/authIsAdminMiddleware");
const router = express.Router();

router.post("/:id", authMiddleware, isAdmin, updateBlogCategory);

module.exports = router;
