import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  // Categories Table
  await knex.schema.createTable('categories', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable().unique();
    table.string('icon').nullable(); // Lucide icon name
    table.string('description').nullable();
    table.timestamps(true, true);
  });

  // Products Table
  await knex.schema.createTable('products', (table) => {
    table.increments('id').primary();
    table.integer('category_id').unsigned().references('id').inTable('categories').onDelete('CASCADE');
    table.string('name').notNullable();
    table.decimal('price', 10, 2).notNullable();
    table.text('description').nullable();
    table.string('image_url').nullable();
    table.boolean('is_available').defaultTo(true);
    table.timestamp('deleted_at').nullable(); // Soft delete support
    table.timestamps(true, true);
  });

  // Tags Table
  await knex.schema.createTable('tags', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable().unique();
    table.timestamps(true, true);
  });

  // ProductTags (Junction Table for M:N)
  await knex.schema.createTable('product_tags', (table) => {
    table.integer('product_id').unsigned().references('id').inTable('products').onDelete('CASCADE');
    table.integer('tag_id').unsigned().references('id').inTable('tags').onDelete('CASCADE');
    table.primary(['product_id', 'tag_id']);
  });

  // Users Table
  await knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('email').notNullable().unique();
    table.string('password_hash').notNullable();
    table.string('role').defaultTo('customer'); // customer, admin
    table.timestamps(true, true);
  });

  // Orders Table
  await knex.schema.createTable('orders', (table) => {
    table.increments('id').primary();
    table.integer('user_id').unsigned().nullable().references('id').inTable('users').onDelete('SET NULL');
    table.decimal('total_amount', 10, 2).notNullable();
    table.string('status').defaultTo('pending'); // pending, completed, cancelled
    table.timestamps(true, true);
  });

  // OrderItems (Junction Table for M:N between Orders and Products)
  await knex.schema.createTable('order_items', (table) => {
    table.increments('id').primary();
    table.integer('order_id').unsigned().references('id').inTable('orders').onDelete('CASCADE');
    table.integer('product_id').unsigned().references('id').inTable('products').onDelete('SET NULL');
    table.integer('quantity').notNullable().defaultTo(1);
    table.decimal('price_at_purchase', 10, 2).notNullable();
    table.timestamps(true, true);
  });

  // Media Table
  await knex.schema.createTable('media', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('type').notNullable(); // image, video
    table.string('url').notNullable();
    table.string('thumbnail_url').nullable();
    table.string('span_class').nullable(); // md:col-span-2 etc.
    table.timestamps(true, true);
  });

  // Indexes for performance
  await knex.schema.table('products', (table) => {
    table.index('category_id');
    table.index('name');
  });

  await knex.schema.table('orders', (table) => {
    table.index('user_id');
    table.index('status');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('order_items');
  await knex.schema.dropTableIfExists('orders');
  await knex.schema.dropTableIfExists('product_tags');
  await knex.schema.dropTableIfExists('tags');
  await knex.schema.dropTableIfExists('products');
  await knex.schema.dropTableIfExists('categories');
  await knex.schema.dropTableIfExists('users');
  await knex.schema.dropTableIfExists('media');
}
