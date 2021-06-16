const attendanceEntity = require('./database/entity/Attendance');
const clientEntity = require('./database/entity/Client');
const addressEntity = require('./database/entity/Address');
const specialistEntity = require('./database/entity/Specialist');
const profissaoEntity = require('./database/entity/Occupation');
const patientRecordEntity = require('./database/entity/PatientRecord');
const patientRecordHistoryEntity = require('./database/entity/PatientRecordHistory');
const userEntity = require('./database/entity/User');
require('dotenv/config');

// const redis = require("redis");
// const client = redis.createClient(process.env.REDIS_URL);
let db = {

    type: 'postgres',
    synchronize: false,
    url: process.env.DATABASE_URL,
    dropschema: false,
    logging: true,
    logger: 'simple-console',

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
if (process.env.NODE_ENV == 'production') {
    // const client = redis.createClient(process.env.REDIS_URL);

    db = {
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
    }
};

module.exports = db;