const express = require("express");
const createBlog = require("../../controller.js/Blog/createBlogController");
const authMiddleware = require("../../middleware/authMiddleware");
const isAdmin = require("../../middleware/authIsAdminMiddleware");
const router = express.Router();

router.put("/", authMiddleware, isAdmin, createBlog);

module.exports = router;
