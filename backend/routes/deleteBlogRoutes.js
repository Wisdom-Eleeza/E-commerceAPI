const express = require("express");
const deleteBlog = require('../controller.js/deleteBlogController')
const router = express.Router();

router.put("/:id", deleteBlog);

module.exports = router;
