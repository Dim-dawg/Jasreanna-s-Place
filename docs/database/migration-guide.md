# Migration & Schema Management Guide

This guide explains how to manage the Jasreanna's Place database schema using Knex.js.

## Prerequisites
- Node.js installed.
- Dependencies installed: `npm install knex better-sqlite3 tsx`.

## Running Migrations

### Apply all pending migrations
To bring the database up to the latest schema:
```bash
npx tsx node_modules/knex/bin/cli.js migrate:latest
```

### Rollback the last migration
If you need to undo the most recent change:
```bash
npx tsx node_modules/knex/bin/cli.js migrate:rollback
```

## Seeding Data

### Populate database with initial data
Warning: This will delete existing data in the tables first.
```bash
npx tsx node_modules/knex/bin/cli.js seed:run
```

## Creating New Migrations
When you need to modify the schema (e.g., add a table or column):

1. **Create the file**:
   ```bash
   npx knex migrate:make migration_name -x ts
   ```
2. **Edit the file** in `server/db/migrations/`.
3. **Apply the change** using the `migrate:latest` command above.
4. **Update Documentation**: Always update `erd-diagram.md` and `schema-overview.md` after a schema change.

## Scaling to PostgreSQL/MySQL
The Knex abstraction layer makes migration to a larger database simple:

1. Update `knexfile.ts` with the new client (e.g., `pg` or `mysql2`).
2. Provide the new connection string.
3. Run `migrate:latest`.
4. Knex will recreate the same structure in the new engine.

*Note: Avoid using SQLite-specific extensions or raw SQL snippets in migrations to ensure maximum portability.*
