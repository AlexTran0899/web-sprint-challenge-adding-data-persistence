const express = require('express');
const resource = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    resource.getAll()
    .then(data => {
        res.status(200).json(data)
    })
})
module.exports = router;