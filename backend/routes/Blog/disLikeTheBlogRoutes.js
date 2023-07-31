const express = require("express");
const dislike = require("../../controller.js/Blog/disLikeTheBlogController");
const authMiddleware = require("../../middleware/authMiddleware");
const router = express.Router();

router.put("/dislike", authMiddleware, dislike);

module.exports = router;
