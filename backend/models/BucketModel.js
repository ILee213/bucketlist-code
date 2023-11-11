const mongoose = require('mongoose')

const Schema = mongoose.Schema

//must modify later to fit my own project
const bucketSchema = new Schema({
    activity: {
        type: String,
        require: true
    },
    attendees: {
        type: Number,
        required: true
    },
    priority: {
        type: Number,
        required:true
    },
    date: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Bucket', bucketSchema)
