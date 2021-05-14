const db = require('../../data/dbConfig')

function getAll() {
    return db('tasks as t')
    .select('p.*', 't.*')
    .leftJoin('projects as p', 'p.project_id', 't.project_id')
    .then(data => {
        return data.map(moredata => {
            return {
                ...moredata,
                task_completed:moredata.task_completed ? true: false
            }
        })
    })
}

function create(data) {
    console.log(data)
    return db('tasks').insert(data).then(task_id => {
        return db('tasks').where({ task_id }).first().then(
            stuff => {
                return {
                    ...stuff,
                    task_completed: stuff.task_completed ? true: false
                }
            }
        )
    })
}
function getById(project_id) {
    console.log(project_id)
    return db('projects').where({ project_id }).first()
}
module.exports = {
    getAll,
    create,
    getById,
}