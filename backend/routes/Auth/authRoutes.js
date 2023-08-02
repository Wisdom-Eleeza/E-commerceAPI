const express = require("express");
const registerUser = require("../../controller.js/Auth/userController");
const login = require("../../controller.js/Auth/loginController");
const isAdmin = require('../../middleware/authIsAdminMiddleware')
const adminLogin = require("../../controller.js/Auth/adminLogin")
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login);
router.post("/admin-login", adminLogin);

module.exports = router;
