const express = require("express");
const getWishList = require("../../controller.js/Auth/getWishList");
const authMiddleware = require("../../middleware/authMiddleware");
const router = express.Router();

router.get("/wish-list", authMiddleware, getWishList);

module.exports = router;
