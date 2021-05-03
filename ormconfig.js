module.exports = {
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE_NAME,
    synchronize: false,
    entities: ['dist/src/**/*.schema.{js,ts}'],
    migrations: ['dist/migrations/*.{js,ts}'],
    cli: {
      migrationsDir: 'migrations',
      entities: ['./**/*.schema.{js,ts}'],
    },
};