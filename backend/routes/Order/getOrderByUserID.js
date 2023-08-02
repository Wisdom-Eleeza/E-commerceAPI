const express = require("express");
const getAllOrderUserId = require("../../controller.js/Order/getOrderByUserID");
const authMiddleware = require("../../middleware/authMiddleware");
const router = express.Router();

router.get("/fetch-all-order/:id", authMiddleware, getAllOrderUserId);

module.exports = router;