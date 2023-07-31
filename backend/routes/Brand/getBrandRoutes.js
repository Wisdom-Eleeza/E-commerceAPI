const express = require("express");
const getBrand = require("../../controller.js/Brand/getBrandController");
const authMiddleware = require('../../middleware/authMiddleware');
const isAdmin = require("../../middleware/authIsAdminMiddleware");
const router = express.Router();

router.post("/:id", authMiddleware, isAdmin, getBrand);

module.exports = router;
