const express = require('express')
const blockUser = require('../controller.js/blockUser')
const router = express.Router()


router.post('/:id', blockUser)
router.post('/:id', UnblockUser)

module.exports = router