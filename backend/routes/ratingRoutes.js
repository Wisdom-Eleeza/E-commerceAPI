const express = require("express");
const ratings = require('../controller.js/ratingController')
const router = express.Router();

router.put("/:id", ratings);

module.exports = router;
