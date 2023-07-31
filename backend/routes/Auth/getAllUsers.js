const express = require("express");
const getAllUsers = require("../../controller.js/Auth/getAllUsers");
const router = express.Router();

router.get("/all-users", getAllUsers);

module.exports = router;
