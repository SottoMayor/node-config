module.exports = {
    client: 'pg',
    connection: {
      host: '000.000.000',
      port: '5432',
      user: 'postgres',
      password: '123456',
      database: 'postgres',
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    pool: {
        min: 2,
        max: 10
    }
};