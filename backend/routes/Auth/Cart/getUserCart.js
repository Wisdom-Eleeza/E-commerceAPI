const express = require("express");
const GetUserCart = require("../../../controller.js/Cart/getUserCart");
const authMiddleware = require("../../../middleware/authMiddleware");
const router = express.Router();

router.get("/fetch-user-cart", authMiddleware, GetUserCart);

module.exports = router;
