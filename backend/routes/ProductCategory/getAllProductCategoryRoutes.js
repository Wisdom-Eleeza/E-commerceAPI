const express = require("express");
const Category = require("../../models/ProductcategoryModel");
const router = express.Router();

router.get("/", Category);

module.exports = router;
