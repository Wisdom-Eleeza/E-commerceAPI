const express = require("express");
const Category = require("../../controller.js/ProductCategory/deleteProductCategoryController");
const authMiddleware = require("../../middleware/authMiddleware");
const isAdmin = require("../../middleware/authIsAdminMiddleware");
const router = express.Router();

router.post("/:id", authMiddleware, isAdmin, Category);

module.exports = router;
