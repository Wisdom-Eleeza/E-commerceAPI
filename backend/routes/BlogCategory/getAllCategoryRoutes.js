const express = require("express");
const getAllBlogCategory = require("../../controller.js/BlogCategory/getAllCategory");
const router = express.Router();

router.post("/", getAllBlogCategory);

module.exports = router;
