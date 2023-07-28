const express = require("express");
const resetPassword = require('../controller.js/forgotPasswordController')
const router = express.Router();

router.post("/:token", resetPassword);

module.exports = router;
