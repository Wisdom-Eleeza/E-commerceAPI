const express = require("express");
const Category = require("../../controller.js/ProductCategory/getProductCategoryController");
const authMiddleware = require("../../middleware/authMiddleware");
const isAdmin = require("../../middleware/authIsAdminMiddleware");
const router = express.Router();

router.get("/:id", authMiddleware, isAdmin, Category);

module.exports = router;
