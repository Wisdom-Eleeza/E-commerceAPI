const express = require("express");
const getAllColor = require('../../controller.js/Color/getAllColor')
const router = express.Router();

router.get("/", getAllColor);

module.exports = router;