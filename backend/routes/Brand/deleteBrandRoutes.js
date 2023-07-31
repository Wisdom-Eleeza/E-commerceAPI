const express = require("express");
const deleteBrand = require("../../controller.js/Brand/deleteBrandController");
const authMiddleware = require('../../middleware/authMiddleware');
const isAdmin = require("../../middleware/authIsAdminMiddleware");
const router = express.Router();

router.post("/:id", authMiddleware, isAdmin, deleteBrand);

module.exports = router;
