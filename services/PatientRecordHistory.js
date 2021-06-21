const { getConnection } = require('typeorm');

module.exports = {

    async list(pages) {
        const connection = getConnection();

        const take = 10;
        const pagination = !pages.page ? 1 : parseInt(pages.page);
        const total = await connection.getRepository('PatientRecordHistory').find();
        const patientRecords = await connection.getRepository('PatientRecordHistory').find({ relations: ['specialist', 'patientRecord'], take, skip: take * (pagination - 1) });

        return {
            page: pagination,
            allPRHistory: total.length,
            data: patientRecords
        };
    },

    async detail(id) {
        const connection = getConnection();

        const patientRecord = await connection.getRepository('PatientRecordHistory').findOne(id, { relations: ['specialist, patientRecord'] });
        return (patientRecord);
    },

    async update(id, fields) {
        const connection = getConnection();

        await connection.getRepository('PatientRecordHistory').update(id, fields, { relations: ['specialist, patientRecord'] });
        return getPatientRecordHistory(id);
    },

    async delete(id) {
        const connection = getConnection();

        await connection.getRepository('PatientRecordHistory').delete(id);
        return { message: req.t('pat_record_history_deleted') };
    },

    async insert(patientRecord) {
        const connection = getConnection();

        const insertedPatientRecordHistory = await connection.getRepository('PatientRecordHistory').save(patientRecord);
        return insertedPatientRecordHistory;
    },

};