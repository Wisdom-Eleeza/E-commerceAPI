const express = require("express");
const getAllOrder = require("../../controller.js/Order/getAllOrders");
const authMiddleware = require("../../middleware/authMiddleware");
const router = express.Router();

router.get("/fetch-all-order", authMiddleware, getAllOrder);

module.exports = router;