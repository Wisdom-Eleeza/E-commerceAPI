const express = require("express");
const resetPassword = require("../../controller.js/Auth/forgotPasswordController");
const router = express.Router();

router.post("/:token", resetPassword);

module.exports = router;
