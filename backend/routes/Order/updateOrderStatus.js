const express = require("express");
const updateOrder = require("../../controller.js/Order/updateOrderStatus");
const authMiddleware = require("../../middleware/authMiddleware");
const isAdmin = require("../../middleware/authIsAdminMiddleware");
const router = express.Router();

router.put("/update-order/:id", authMiddleware, isAdmin, updateOrder);

module.exports = router;