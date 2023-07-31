const express = require("express");
const router = express.Router();
const deleteProduct = require("../../controller.js/Product/deleteProductController");
const isAdmin = require("../../middleware/authIsAdminMiddleware");
const authMiddleware = require("../../middleware/authMiddleware");

router.delete("/:id", authMiddleware, isAdmin, deleteProduct);

module.exports = router;
