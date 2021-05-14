const db = require('../../data/dbConfig')

function getAll() {
    return db('tasks')
}
module.exports = {
    getAll,
}