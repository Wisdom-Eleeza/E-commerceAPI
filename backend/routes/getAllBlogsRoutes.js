const express = require("express");
const getAllBlog = require('../controller.js/getAllBlogsController')
const router = express.Router();

router.put("/", getAllBlog);

module.exports = router;
