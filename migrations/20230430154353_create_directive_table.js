exports.up = function (knex) {
  return knex.schema
    .createTable("medical_directive", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("conditions").notNullable();
      table.string("contraindications").notNullable();
      table.string("treatment").notNullable();
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("treatment", (table) => {
      table.increments("id").primary();
      table.string("drug").notNullable();
      table.string("dose").notNullable();
      table.string("route").notNullable();
      table.string("max_single_dose").notNullable();
      table.string("number_of_doses").notNullable();

      // table
      //   .integer('warehouse_id')
      //   .unsigned()
      //   .notNullable()
      //   .references('id')
      //   .inTable('warehouse')
      //   .onUpdate('CASCADE')
      //   .onDelete('CASCADE');
      // table.integer('quantity').notNullable().defaultTo(0);
      // table.string('status').notNullable();
      // table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable("patient", (table) => {
      table.increments("id").primary();
      table.integer("age").notNullable();
      table.integer("weight").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("treatment")
    .dropTable("medical_directive")
    .dropTable("patient");
};
