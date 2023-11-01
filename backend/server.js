require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bucketRoutes = require('./routes/bucket_items')

//express app
const app = express()

//middleware
app.use(express.json())
app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes 
app.use('/api/bucket_items', bucketRoutes)

//connect to DB

mongoose.connect('mongodb+srv://irischanvy08:RGRTOduyTi1JmtmV@bestiesbucketlist.lbw4bph.mongodb.net/')
    .then(() => {
        //listen for requests
        const port = 3001;
        app.listen(port, () => {
            console.log('connected to db & on port 3001!!!')
        })
    })
    .catch((error) => {
        console.log(error)
    })


