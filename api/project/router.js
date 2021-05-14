const express = require('express');
const project = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    project.getAll()
    .then(data => {
        res.status(200).json(data)
    })
    .then(next)
})

router.post('/', (req, res, next) => {
    project.create(req.body)
    .then(data => {
        res.status(201).json(data)
    })
    .then(next)
})
module.exports = router;