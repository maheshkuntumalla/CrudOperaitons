const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Inter = require('../models/inter')

router.post('/deleteUser/:id', async(req, res)=>{
    try{
        const user = await Inter.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(404).send('user not found')
        }
        res.send(user)

    }
    catch(error){
        res.send(error.message)
    }
})



module.exports = router