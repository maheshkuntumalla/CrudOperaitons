const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const port = 3333



mongoose.connect('mongodb://localhost:27017/DemoCrudOperations',)
    .then(()=> console.log("Our server is connected with mondodb"))
    .catch((error)=> console.log(error.message))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


const interRouter = require('./router')
app.use('/app', interRouter)


app.listen(port, ()=>{
    console.log('app is running on port number 3333')
})