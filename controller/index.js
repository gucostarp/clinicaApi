const Attendance = require('./Attendance');
const Auth = require('./Auth');
const Client = require('./Client');
const Specialist = require('./Specialist');
const Occupation = require('./Occupation');
const PatientRecord = require('./PatientRecord');
const PatientRecordHistory = require('./PatientRecordHistory');
const User = require('./User');

const Controllers = {
    Attendance,
    Auth,
    Client,
    Specialist,
    Occupation,
    PatientRecord,
    PatientRecordHistory,
    User
}

module.exports = Controllers