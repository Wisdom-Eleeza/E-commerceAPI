const express = require("express");
const uploadImage = require("../../controller.js/Upload/uploadBlogImageController");
const router = express.Router();

router.put("/:id", uploadImage);

module.exports = router;
