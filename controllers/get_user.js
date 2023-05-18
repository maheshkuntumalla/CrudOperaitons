const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Inter = require('../models/inter')


router.get('/users/:id', async(req,res)=>{
    try{
        const user = await Inter.findById(req.params.id)
        if(!user){
            return res.status(404).send('user not found')
        }
        res.send(user)
    }
    catch(error){
        res.send(error.message)
    }
})

router.get('/getusers', async(req,res)=>{
    try{
        const user = await Inter.find()
        if(!user){
            return res.status(404).send('users not found')
        }
        res.send(user)
    }   
    catch(error){
        res.send(error.message)
    }
})


module.exports = router
