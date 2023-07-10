const verifyToken = require('../middleware/verifyAndAuthorize')

const router = require('express').Router()

router.put('/:id', verifyToken)

module.exports = router