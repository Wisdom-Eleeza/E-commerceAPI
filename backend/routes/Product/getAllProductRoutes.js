const express = require("express");
const allProduct = require("../../controller.js/Product/getAllProduct");
const router = express.Router();

router.get("/get-all-product", allProduct);

module.exports = router;
