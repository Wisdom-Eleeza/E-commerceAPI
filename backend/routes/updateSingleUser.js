const express = require("express");
const updateSingleUser = require("../controller.js/updateSingleUser");
const router = express.Router();

router.put("/:id", updateSingleUser);

module.exports = router;
