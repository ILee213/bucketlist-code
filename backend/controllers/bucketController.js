const BucketModel = require('../models/BucketModel')
const Bucket = require('../models/BucketModel')
const mongoose = require('mongoose')

//get all buckets
const getBuckets = async(req, res) => {
    const buckets = await Bucket.find({}).sort({createdAt: -1})
    res.status(200).json(buckets)
}

//get single bucket
const getBucket = async(req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such bucket'})
    }

    const bucket = await Bucket.findById(id)

    if (!bucket) {
        return res.status(404).json({error: 'No such bucket'})
    }

    res.status(200).json(bucket)

}

//create new bucket
const createBucket = async(req, res) => {
    const {title, reps, load} = req.body

    //add doc to db
    try {
        const bucket = await Bucket.create({title, reps, load})
        res.status(200).json(bucket)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
}

//delete a bucket

const deleteBucket = async(req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such bucket'})
    }
    const bucket = await Bucket.findOneAndDelete({_id: id})

    if (!bucket) {
        return res.status(404).json({error: 'No such bucket'})
    }

    res.status(200).json(bucket)

}

//update a workout

const updateBucket = async(req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such bucket'})
    }
    
    const bucket = await Bucket.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if (!bucket) {
        return res.status(404).json({error: 'No such bucket'})
    }

    res.status(200).json(bucket)

}


module.exports = {
    createBucket,
    getBuckets,
    getBucket,
    deleteBucket,
    updateBucket
}