const express = require("express");
const getBlog = require('../controller.js/getBlogController')
const router = express.Router();

router.put("/:id", getBlog);

module.exports = router;
