const express = require("express");
const liked = require('../controller.js/likeTheBlogController')
const router = express.Router();

router.put("/like", liked);

module.exports = router;
