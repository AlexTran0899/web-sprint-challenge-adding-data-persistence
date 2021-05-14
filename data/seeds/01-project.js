
exports.seed = function(knex) {
  return knex('projects').insert([   
    { project_name: 'liquid culture' ,project_description: 'this is going well'},
    { project_name: 'grain spawn', project_completed:true }
  ]);
};
