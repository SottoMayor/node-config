const dotenv = require('dotenv');
dotenv.config()

module.exports = {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
    //   port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    pool: {
        min: 2,
        max: 10
    }
};