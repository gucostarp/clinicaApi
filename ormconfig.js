const attendanceEntity = require('./database/entity/Attendance');
const clientEntity = require('./database/entity/Client');
const addressEntity = require('./database/entity/Address');
const specialistEntity = require('./database/entity/Specialist');
const profissaoEntity = require('./database/entity/Occupation');
const patientRecordEntity = require('./database/entity/PatientRecord');
const patientRecordHistoryEntity = require('./database/entity/PatientRecordHistory');
const userEntity = require('./database/entity/User');
require('dotenv/config');

module.exports = {
    type: 'postgres',
    synchronize: true,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    logging: true,
    logger: 'simple-console',
    database: process.env.DB_NAME,
    entities: [
        attendanceEntity,
        userEntity,
        clientEntity,
        addressEntity,
        specialistEntity,
        profissaoEntity,
        patientRecordEntity,
        patientRecordHistoryEntity
    ],
    migrations: ['./database/migration/*.js'],
    cli: {
        migrationsDir: './database/migration',
    },
};