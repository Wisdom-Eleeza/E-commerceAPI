const express = require("express");
const updateBlog = require("../../controller.js/Blog/updateBlogController");
const authMiddleware = require("../../middleware/authMiddleware");
const isAdmin = require("../../middleware/authIsAdminMiddleware");
const router = express.Router();

router.put("/:id", authMiddleware, isAdmin, updateBlog);

module.exports = router;
