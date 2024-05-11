import type { Knex } from 'knex';
import env from './.constants';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: env.DB_HOST,
      port: env.DB_PORT,
      user: env.DB_USER,
      password: env.DB_PASSWORD,
      database: env.DB_NAME,
    },
    migrations: {
      directory: './migrations',
    },
  },
};

export default config;
