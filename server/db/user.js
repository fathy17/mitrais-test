const knex = require("./connection");

module.exports = {
  getOne: function (id) {
    return knex("user").where("id", id).first();
  },
  getOnebyEmail: function (email) {
    return knex("user").where("email", email).first();
  },
  getOnebyMobile: function (mobile) {
    return knex("user").where("mobile", mobile).first();
  },
  create: function (user) {
    return knex("user")
      .insert(user, "id")
      .then((ids) => ids[0]);
  },
};
