
exports.seed = function(knex) {
  return knex('project').insert([   
    { project_name: 'liquid culture' ,project_description: 'this is going well'},
    { project_name: 'grain spawn', project_completed:true }
  ]);
};
