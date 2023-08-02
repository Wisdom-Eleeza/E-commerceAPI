const express = require("express");
const getOrder = require("../../controller.js/Order/getAllOrders");
const authMiddleware = require("../../middleware/authMiddleware");
const router = express.Router();

router.get("/fetch-order", authMiddleware, getOrder);

module.exports = router;