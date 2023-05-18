const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Inter = require('../models/inter')


router.post('/updateuser/:id', async(req, res)=>{
    try{
        const updates = Object.keys(req.body)
        const allowedUpdates = ['name', 'email', 'mobilenumber'];
        const isvalidateOperation = updates.every((update) => allowedUpdates.includes(update))
        console.log(isvalidateOperation)

        if(!isvalidateOperation){
            return res.status(400).send({error: 'invalid updates'})
        }
        const user = await Inter.findById(req.params.id);
        if(!user){
            return res.status(404).send("user not found")
        }
        updates.forEach((update => user[update] = req.body[update]))
        await user.save();
        res.send(user);
    }
    catch(error){
        res.send(error.message)
    }
})


module.exports = router