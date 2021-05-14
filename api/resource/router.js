const express = require('express');
const resource = require('./model');

const router = express.Router();

const checkResourceName = (req, res, next) => {
    resource.getByName(req.body.resource_name)
    .then(data => {
        if (data) {
            next({ status: 400, message: 'name taken '})
        } else {
            next()
        }
    })
    .catch(next)

}


router.get('/', (req, res, next) => {
    resource.getAll()
    .then(data => {
        res.status(200).json(data)
    })
})
router.post('/', checkResourceName, (req, res, next) => {
    resource.create(req.body)
        .then(data => {
            res.status(201).json(data)
        })
        .then(next)
})
module.exports = router;