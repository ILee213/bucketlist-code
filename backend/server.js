require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bucketRoutes = require('./routes/bucket_items')

//express app
const app = express()

//middleware
app.use(express.json())

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
        app.listen(4000, () => {
            console.log('connected to db & on port 4000!!!')
        })
    })
    .catch((error) => {
        console.log(error)
    })


/*
app.listen(4000, () => {
    console.log('listening on port 4000!!')
})
*/


// listen for requests
//attempt at using env variables
/*
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})
*/
