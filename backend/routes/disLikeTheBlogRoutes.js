const express = require("express");
const dislike = require('../controller.js/disLikeTheBlogController')
const router = express.Router();

router.put("/dislike", dislike);

module.exports = router;
