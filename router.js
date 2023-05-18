const express = require('express')
const router = express.Router()

const user = require('./controllers/index')
router.use('/user',user)


module.exports = router