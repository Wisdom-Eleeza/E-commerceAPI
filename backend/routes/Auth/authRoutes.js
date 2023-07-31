const express = require("express");
const registerUser = require("../../controller.js/Auth/userController");
const login = require("../../controller.js/Auth/loginController");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login);

module.exports = router;
