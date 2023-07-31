const express = require("express");
const getBlog = require("../../controller.js/Blog/getBlogController");
const router = express.Router();

router.get("/:id", getBlog);

module.exports = router;
