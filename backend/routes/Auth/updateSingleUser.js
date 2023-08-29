const express = require("express");
const updateSingleUser = require("../../controller.js/Auth/updateSingleUser");
const authMiddleware = require('../../middleware/authMiddleware')
const router = express.Router();

router.put("/:id", authMiddleware, updateSingleUser);

module.exports = router;
