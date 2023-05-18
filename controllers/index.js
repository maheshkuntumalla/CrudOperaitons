const express = require('express')
const router = express.Router()

const create = require('./create')
router.use('/create',create)

const delete_u = require('./delete')
router.use('/delete',delete_u)

const update = require('./update')
router.use('/update',update)

const get_user = require('./get_user')
router.use('/get_user',get_user)

module.exports = router