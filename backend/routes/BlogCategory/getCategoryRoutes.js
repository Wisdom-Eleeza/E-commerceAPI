const express = require("express");
const getBlogCategory = require("../../controller.js/BlogCategory/getCategory");
const router = express.Router();

router.post("/:id", getBlogCategory);

module.exports = router;
