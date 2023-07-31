const express = require("express");
const handleRefreshToken = require("../../controller.js/Auth/handleRefreshToken");
const router = express.Router();

router.get("/refresh", handleRefreshToken);
module.exports = router;
