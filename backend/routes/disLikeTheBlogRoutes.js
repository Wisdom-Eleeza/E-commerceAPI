const express = require("express");
const dislike = require('../controller.js/disLikeTheBlogController');
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.put("/dislike", authMiddleware, dislike);

module.exports = router;
