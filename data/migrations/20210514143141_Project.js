
exports.up = function(knex) {
    return knex.schema
    .createTable('project', tbl => {
        tbl.increments('project_id')
        tbl.string('project_name', 255).notNullable()
        tbl.string('project_description', 1000)
        tbl.bool('project_completed').defaultTo(false)
    })
    .createTable('resource_project', tbl => {
        tbl.increments('resource_id')
        tbl.string('resource_name',1000).notNullable().unique()
        tbl.string('resource_description', 1000)
    })
    .createTable('task_project', tbl => {
        tbl.increments('task_id')
        tbl.string('task_description')
        tbl.string('task_notes')
        tbl.bool('task_completed').defaultTo(false)
        tbl.integer('project_id')
        .notNullable()
        .references('project_id')
        .inTable('project')
        .onDelete('CASCADE')
        .onUpdate('CASCADE') 
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
};
