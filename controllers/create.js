const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Inter = require('../models/inter')


router.post('/createUser', async(req,res)=>{
    try{
        const requestBody = req.body;
        const {name, email, mobilenumber} = requestBody
        let inters = {
            name,
            email,
            mobilenumber
        }

        const data = await Inter.create(inters)
        res.send(data)
    }
    catch(error){
        res.send(error.message)
    }
})


module.exports = router