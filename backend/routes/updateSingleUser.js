const express = require("express");
const updateSingleUser = require("../controller.js/updateSingleUser");
// const isAdmin = require("../middleware/authIsAdminMiddleware");
const router = express.Router();

router.put("/:id", updateSingleUser);

module.exports = router;
