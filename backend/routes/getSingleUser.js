const express = require("express");
const getSingleUser = require("../controller.js/getSingleUser");
const authMiddleware = require("../middleware/authMiddleware");
const isAdmin = require("../middleware/authIsAdminMiddleware");
const router = express.Router();

router.get("/:id", authMiddleware, isAdmin, getSingleUser);

module.exports = router;
