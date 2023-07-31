const express = require("express");
const createBlogCategory = require("../../controller.js/BlogCategory/createCategory");
const authMiddleware = require('../../middleware/authMiddleware');
const isAdmin = require("../../middleware/authIsAdminMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createBlogCategory);

module.exports = router;
