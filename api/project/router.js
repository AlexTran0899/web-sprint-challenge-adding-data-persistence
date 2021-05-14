const express = require('express');
const project = require('./model');
const yup = require('yup')
const router = express.Router();

const messageSchema = yup.object({
    project_name: yup.string().required(),
    project_description: yup.string(),
    project_completed: yup.boolean()
})

const nameCheck = async (req, res, next) => {
    try {
        const validate = await messageSchema.validate(req.body, { stripUnknown: true })
        req.body = validate
        next()
    } catch (err) {
        next({ status: 400, message: err.message })
    }
}

router.get('/', (req, res, next) => {
    project.getAll()
        .then(data => {
            res.status(200).json(data)
        })
        .then(next)
})

router.post('/', nameCheck, (req, res, next) => {
    project.create(req.body)
        .then(data => {
            res.status(201).json(data)
        })
        .then(next)
})
module.exports = router;