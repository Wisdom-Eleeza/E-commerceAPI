const express = require("express");
const liked = require("../../controller.js/Blog/likeTheBlogController");
const authMiddleware = require("../../middleware/authMiddleware");
const isAdmin = require("../../middleware/authIsAdminMiddleware");
const router = express.Router();

router.put("/like", authMiddleware, liked);

module.exports = router;
