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
    synchronize: false,
    url: process.env.DATABASE_URL,
    dropschema: false,
    logging: true,
    logger: 'simple-console',
    ssl: true,
    extra: {
        ssl: {
            rejectUnauthorized: false
        },
    },
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
    migrations: ['./database/migrations/*.js'],
    cli: {
        migrationsDir: './database/migrations',
    },
};