const userEntity = require('./database/entity/User');
const clienteEntity = require('./database/entity/Cliente');

module.exports = {
  type: 'sqlite',
  synchronize: true,
  logging: true,
  logger: 'simple-console',
  database: './database/database.sqlite',
  entities: [userEntity, clienteEntity],
  migrations: ['./database/migration/*.js'],
  cli: {
    migrationsDir: './database/migration',
  },
};
