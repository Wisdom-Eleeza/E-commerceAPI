const express = require("express");
const emptyCart = require("../../../controller.js/Cart/emptyCart");
const authMiddleware = require("../../../middleware/authMiddleware");
const router = express.Router();

router.delete("/empty-cart", authMiddleware, emptyCart);

module.exports = router;
