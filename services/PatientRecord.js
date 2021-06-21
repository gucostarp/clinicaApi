const { getConnection } = require('typeorm');

module.exports = {

    async list(pages) {
        const connection = getConnection();

        const take = 10;
        const pagination = !pages.page ? 1 : parseInt(pages.page);
        const total = await connection.getRepository('PatientRecord').find({ relations: ['client'] });
        const patientRecords = await connection.getRepository('PatientRecord').find({ relations: ['client'], take, skip: take * (pagination - 1) });

        return {
            page: pagination,
            allPatientRecords: total.length,
            data: patientRecords
        };
    },

    async detail(id) {
        const connection = getConnection();

        const repository = await connection.getRepository('PatientRecord');
        const result = await repository.findOne(id, { relations: ['client'] });
        const patientRecordHistory = connection.getRepository('PatientRecordHistory');
        result.histories = await patientRecordHistory.find({ where: { patientRecord: result.id } });
        return result;
    },

    async update(id, fields) {
        const connection = getConnection();

        const repository = await connection.getRepository('PatientRecord').update(id, fields);
        const result = await repository.findOne(id, { relations: ['client', 'patientRecordHistory'] });
        return result;
    },

    async delete(id) {
        const connection = getConnection();

        await connection.getRepository('PatientRecord').delete(id);
        return { message: req.t('patient_record_deleted') };
    },

    async insert(patientRecord) {
        const connection = getConnection();

        const insertedPatientRecord = await connection.getRepository('PatientRecord').save(patientRecord, { relations: ['client'] });
        return insertedPatientRecord;
    },

};