const mongoose = require('mongoose')

const Schema = mongoose.Schema


//must modify later to fit my own project
const bucketSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required:true
    }
}, { timestamps: true })

module.exports = mongoose.model('Bucket', bucketSchema)
