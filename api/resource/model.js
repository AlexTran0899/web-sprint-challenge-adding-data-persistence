const db = require('../../data/dbConfig')

function getAll() {
    return db('resources')
}

function create(data) {
    console.log(data)
    return db('resources').insert(data).then(resources_id => {
        return db('resources').where({ resources_id }).first()
    })
}

function getByName(resource_name) {
    return db('resources').where({ resource_name }).first()
}
module.exports = {
    getAll,
    create,
    getByName,
}