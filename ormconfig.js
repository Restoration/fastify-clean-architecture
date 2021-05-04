module.exports = {
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE_NAME,
    synchronize: false,
    entities: ['dist/core/models/*.model.{js,ts}'],
    migrations: ['dist/infrastructure/mysql/migrations/*.{js,ts}'],
    cli: {
      migrationsDir: 'infrastructure/mysql/migrations',
      entities: ['./core/models/*.{js,ts}'],
    },
};