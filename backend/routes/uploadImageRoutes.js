const express = require("express");
const uploadImage = require("../controller.js/uploadImageController");
const router = express.Router();

router.put("/:id", uploadImage);

module.exports = router;
