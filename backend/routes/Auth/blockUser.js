const express = require("express");
const blockUser = require("../../controller.js/Auth/blockUser");
const UnBlockUser = require("../../controller.js/Auth/unBlockUser");
const isAdmin = require("../../middleware/authIsAdminMiddleware");
const router = express.Router();

router.post("/:id", isAdmin, blockUser);
router.post("/:id", isAdmin, UnBlockUser);

module.exports = router;
