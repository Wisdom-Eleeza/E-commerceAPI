const express = require("express");
const updateBrand = require("../../controller.js/Brand/updateBrandController");
const authMiddleware = require('../../middleware/authMiddleware');
const isAdmin = require("../../middleware/authIsAdminMiddleware");
const router = express.Router();

router.post("/:id", authMiddleware, isAdmin, updateBrand);

module.exports = router;
