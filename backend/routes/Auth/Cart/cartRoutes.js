const express = require("express");
const userCart = require("../../../controller.js/Cart/cartController");
const authMiddleware = require("../../../middleware/authMiddleware");
const router = express.Router();

router.post("/add-to-cart", authMiddleware, userCart);

module.exports = router;
