const express = require("express");
const registerUser = require("../../controller.js/Auth/userController");
const logOut = require("../../controller.js/Auth/logoutController");
const router = express.Router();

router.post("/logout", logOut);

module.exports = router;
