const express = require('express');
const task = require('./model');
const yup = require('yup');
const router = express.Router();

const messageSchema = yup.object({
    task_description: yup.string().required(),
    project_id: yup.number().required(),
})

const projectIDValidator = (req, res, next) => {
    console.log(req.body.project_id)
    task.getById(req.body.project_id)
        .then(data => {
            if (!data) {
                next({ status: 400, message: 'id not valid' })
            } else {
                next()
            }
        })
        .catch(next)

}

const taskCheck = async (req, res, next) => {
    try {
        const validate = await messageSchema.validate(req.body, { stripUnknown: true })
        req.body = validate
        next()
    } catch (err) {
        next({ status: 400, message: err.message })
    }
}

router.get('/', (req, res, next) => {
    task.getAll()
        .then(data => {
            res.status(200).json(data)
        })
})
router.post('/', taskCheck, projectIDValidator, (req, res, next) => {
    task.create(req.body)
        .then(data => {
            res.status(201).json(data)
        })
        .then(next)
})
module.exports = router;