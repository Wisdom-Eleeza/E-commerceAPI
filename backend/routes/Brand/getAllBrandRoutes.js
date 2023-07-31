const express = require("express");
const getAllBrand = require("../../controller.js/Brand/getAllBrandController");
const authMiddleware = require('../../middleware/authMiddleware');
const isAdmin = require("../../middleware/authIsAdminMiddleware");
const router = express.Router();

router.post("/:id", authMiddleware, isAdmin, getAllBrand);

module.exports = router;
