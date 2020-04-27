exports.seed = function (knex) {
  return knex
    .raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 3')
    .then(() => {
      const users = [
        {
          id: 1,
          mobile: "081344516548",
          first_name: "User",
          last_name: "Satu",
          birth_date: new Date(),
          gender: 1,
          email: "user1@gmail.com",
        },
        {
          id: 2,
          mobile: "081344516333",
          first_name: "User",
          last_name: "Dua",
          birth_date: new Date(),
          gender: 0,
          email: "user2@gmail.com",
        },
      ];
      return knex("user").insert(users);
    });
};
