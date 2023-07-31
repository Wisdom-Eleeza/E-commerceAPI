const express = require("express");
const addToWishList = require("../../controller.js/Product/addToWishListController");
const router = express.Router();

router.put("/:id", addToWishList);

module.exports = router;
