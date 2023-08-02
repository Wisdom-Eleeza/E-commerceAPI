const express = require("express");
const saveAddress = require('../../controller.js/Auth/address');
const authMiddleware = require("../../middleware/authMiddleware");
const router = express.Router();

router.put("/save-address", authMiddleware, saveAddress);

module.exports = router;
