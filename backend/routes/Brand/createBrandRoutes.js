const express = require("express");
const createBrand = require("../../controller.js/Brand/createBrandController");
const authMiddleware = require('../../middleware/authMiddleware');
const isAdmin = require("../../middleware/authIsAdminMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createBrand);

module.exports = router;
