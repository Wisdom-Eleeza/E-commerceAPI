const express = require("express");
const getBlog = require('../controller.js/getBlogController');
const router = express.Router();

router.get("/:id", getBlog);

module.exports = router;
