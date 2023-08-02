const express = require("express");
const createColor = require('../../controller.js/Color/createColor')
const authMiddleware = require('../../middleware/authMiddleware')
const isAdmin = require("../../middleware/authIsAdminMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createColor);

module.exports = router;