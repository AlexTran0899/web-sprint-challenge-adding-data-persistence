
exports.seed = function(knex) {
  return knex('resource_project').insert([   
    { resource_name: 'first' ,resource_description: 'fooddd' },
    { resource_name: 'seond' ,resource_description: 'fooddd' },
    { resource_name: 'third' ,resource_description: 'fooddd' },
    { resource_name: 'fporth ' ,resource_description: 'fooddd' },
  ]);
};
