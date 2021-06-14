const { getConnection } = require('typeorm');

module.exports = {

    async list() {
        const connection = getConnection();

        const patientRecords = await connection.getRepository('PatientRecord').find({ relations: ['client'] });
        return (patientRecords);

    },

    async getId(id) {
        const connection = getConnection();

        const patientRecord = await connection.getRepository('PatientRecord').findOne(id, { relations: ['client'] });
        return (patientRecord);

    },

    async update(id, fields) {
        const connection = getConnection();

        await connection.getRepository('PatientRecord').update(id, fields);
        return getId(id);

    },

    async delete(id) {
        const connection = getConnection();

        await connection.getRepository('PatientRecord').delete(id);
        return { message: 'PatientRecord excluído' };

    },

    async insert(patientRecord) {
        const connection = getConnection();

        const insertedPatientRecord = await connection.getRepository('PatientRecord').save(patientRecord);
        return insertedPatientRecord;

    },

};