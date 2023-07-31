const express = require("express");
const uploadImage = require("../../controller.js/Blog/uploadImageController");
const router = express.Router();

router.put("/:id", uploadImage);

module.exports = router;
