module.exports = {
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE_NAME,
    synchronize: false,
    entities: ['infrastructure/dao/*{.ts,.js}'],
    migrationsTableName: 'migrations',
    migrations: ['dist/infrastructure/migrations/*.js'],
    cli: {
      migrationsDir: 'infrastructure/migrations',
    },
};
