exports.seed = function (knex) {
  return knex('children').insert([
    { parent_id: 1, profile_id: 5, username: 'ILoveFortnite', age: 8 },
    { parent_id: 1, profile_id: 10, username: 'BananaBread', age: 12 },
  ]);
};
