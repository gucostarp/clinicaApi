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
    url: 'postgres://iuisughqopvshp:92cea9a0bda537095dad46eb933b61492573a6bce9a45eb37e335f738a0acb61@ec2-34-193-112-164.compute-1.amazonaws.com:5432/dcb3egj6u7gie3',
    // host: process.env.DATABASE_URL,
    // username: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // port: process.env.DB_PORT,
    dropschema: false,
    logging: true,
    logger: 'simple-console',
    ssl: true,
    extra: {
        ssl: {
            rejectUnauthorized: false
        },
    },
    // database: process.env.DB_NAME,
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
        migrationsDir: './database/migration',
    },
};