import type { Knex } from 'knex';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'better-sqlite3',
    connection: {
      filename: path.join(__dirname, 'server/db/dev.sqlite3')
    },
    useNullAsDefault: true,
    migrations: {
      directory: path.join(__dirname, 'server/db/migrations'),
      extension: 'ts'
    },
    seeds: {
      directory: path.join(__dirname, 'server/db/seeds'),
      extension: 'ts'
    },
    pool: {
      afterCreate: (conn: any, cb: any) => {
        conn.pragma('foreign_keys = ON');
        cb();
      }
    }
  },
  production: {
    client: 'better-sqlite3',
    connection: {
      filename: path.join(__dirname, 'server/db/prod.sqlite3')
    },
    useNullAsDefault: true,
    migrations: {
      directory: path.join(__dirname, 'server/db/migrations'),
      extension: 'ts'
    },
    seeds: {
      directory: path.join(__dirname, 'server/db/seeds'),
      extension: 'ts'
    },
    pool: {
      afterCreate: (conn: any, cb: any) => {
        conn.pragma('foreign_keys = ON');
        cb();
      }
    }
  }
};

export default config;
