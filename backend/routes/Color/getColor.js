const express = require("express");
const getColor = require('../../controller.js/Color/getColor')
const router = express.Router();

router.get("/:id", getColor);

module.exports = router;