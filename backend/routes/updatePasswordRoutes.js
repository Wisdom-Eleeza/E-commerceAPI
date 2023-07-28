const express = require("express");
const updatePassword = require('../controller.js/updateProductController')
const router = express.Router();

router.put("/:id", updatePassword);

module.exports = router;
