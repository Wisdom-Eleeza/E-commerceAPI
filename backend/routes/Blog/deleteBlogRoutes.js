const express = require("express");
const deleteBlog = require("../../controller.js/Blog/deleteBlogController");
const authMiddleware = require("../../middleware/authMiddleware");
const isAdmin = require("../../middleware/authIsAdminMiddleware");
const router = express.Router();

router.put("/:id", authMiddleware, isAdmin, deleteBlog);

module.exports = router;
