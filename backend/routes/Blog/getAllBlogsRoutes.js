const express = require("express");
const getAllBlog = require("../../controller.js/Blog/getAllBlogsController");
const router = express.Router();

router.put("/", getAllBlog);

module.exports = router;
