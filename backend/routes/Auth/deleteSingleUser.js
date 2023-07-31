const express = require("express");
const router = express.Router();
const deleteSingleUser = require("../../controller.js/Auth/deleteSingleUser");

router.delete("/:id", deleteSingleUser);

module.exports = router;
