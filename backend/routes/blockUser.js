const express = require('express')
const blockUser = require('../controller.js/blockUser')
const UnBlockUser = require('../controller.js/unBlockUser')
const isAdmin = require('../middleware/authIsAdminMiddleware')
const router = express.Router()


router.post('/:id', isAdmin, blockUser)
router.post('/:id', isAdmin, UnBlockUser)

module.exports = router