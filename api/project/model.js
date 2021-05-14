const db = require('../../data/dbConfig')

const getAll = async () => {
    await db('projects')
}
module.exports = {
    getAll,
}