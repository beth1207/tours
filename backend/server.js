require ('dotenv').config()

const express = require ('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require ('cors')
const router = require('./routes/route')
const app=express() //create express app

                //MIDDLEWARE
                
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(router)

mongoose.connect(process.env.DBLINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>console.log('connected to the DB successfully'))
    .catch((err)=>console.log(err));

app.listen(port, ()=>console.log('server is running'))