const express = require("express");
const deleteImage = require('../../controller.js/Upload/deleteImageController')
const router = express.Router();

router.put("/:id", deleteImage);

module.exports = router;
