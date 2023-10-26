const express = require('express')
const Bucket = require('../models/BucketModel')

const router = express.Router()

//GET all buckets
router.get('/', (req, res) => {
    res.json({mssg: 'GET all buckets'})
})

//GET a single bucket
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single bucket'})
})

//POST a new bucket
router.post('/', async(req, res) => {
    const {title, reps, load} = req.body

    try {
        const bucket = await Bucket.create({title, reps, load})
        res.status(200).json(bucket)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
})

//DELETE a bucket
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a bucket'})
})

//UPDATE a bucket
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a bucket'})
})

module.exports = router