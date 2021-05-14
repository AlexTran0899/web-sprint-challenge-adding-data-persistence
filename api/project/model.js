const db = require('../../data/dbConfig')

function getAll(){
    return db('projects').then(data => {
        return data.map(moredata => {
           return{
               ...moredata,
               project_completed: moredata.project_completed ? true: false
           }
        })
    })
}

function create(data) {
    console.log(data)
    return db('projects').insert(data).then(project_id =>{
        return db('projects').where({project_id}).first().then(
            stuff => {
                return {
                    ...stuff,
                    project_completed: stuff.project_completed ? true: false
                }
            }
        )
    })
}
module.exports = {
    getAll,
    create,
}