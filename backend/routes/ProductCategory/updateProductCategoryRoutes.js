const express = require("express");
const Category = require("../../controller.js/ProductCategory/CreateProductCategoryController");
const authMiddleware = require("../../middleware/authMiddleware");
const isAdmin = require("../../middleware/authIsAdminMiddleware");
const router = express.Router();

router.put("/:id", authMiddleware, isAdmin, Category);

module.exports = router;
