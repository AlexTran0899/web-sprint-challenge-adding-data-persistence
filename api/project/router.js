const express = require('express');
const project = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    project.getAll()
    .then(data => {
        res.status(200).json(data)
    })
})
module.exports = router;