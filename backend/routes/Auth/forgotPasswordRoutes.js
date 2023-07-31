const express = require("express");
const forgotPassword = require("../../controller.js/Auth/forgotPasswordController");
const router = express.Router();

router.post("/", forgotPassword);

module.exports = router;
