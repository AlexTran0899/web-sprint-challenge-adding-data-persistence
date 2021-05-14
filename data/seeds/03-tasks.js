exports.seed = function(knex) {
    return knex('tasks').insert([   
      { task_description: 'des one', task_notes: "lions mane" ,task_completed: true,project_id: 1},
      { task_description: 'desk 2', task_notes: "lions mane" ,project_id: 1 },
      { task_description: 'des 3', task_notes: "lions mane" ,task_completed: false, project_id: 1},
      { task_description: 'des 4', task_notes: "lions mane" ,project_id:2},
      { task_description: 'des 5', task_notes: "lions mane" ,task_completed: false ,project_id:2 },
    ]);
  };