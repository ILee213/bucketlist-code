const express = require('express')

const{
    createBucket,
    getBuckets,
    getBucket,
    deleteBucket,
    updateBucket
} = require('../controllers/bucketController')

const router = express.Router()

//GET all buckets
router.get('/', getBuckets)

//GET a single bucket
router.get('/:id', getBucket)

//POST a new bucket
router.post('/', createBucket)

//DELETE a bucket
router.delete('/:id', deleteBucket)

//UPDATE a bucket
router.patch('/:id', updateBucket)

module.exports = router