const userEntity = require('./database/entity/User');

module.exports = {
  type: 'sqlite',
  synchronize: true,
  logging: true,
  logger: 'simple-console',
  database: './database/database.sqlite',
  entities: [userEntity],
  migrations: ['./database/migration/*.js'],
  cli: {
    migrationsDir: './database/migration',
  },
};
