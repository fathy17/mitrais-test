exports.up = function (knex) {
  return knex.schema.createTable("user", (table) => {
    table.increments();
    table.text("mobile").unique().notNullable();
    table.text("first_name").notNullable();
    table.text("last_name").notNullable();
    table.text("birth_date");
    table.integer("gender");
    table.text("email").unique().notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user");
};
