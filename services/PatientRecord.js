const { createConnection, getRepository } = require('typeorm');

module.exports = {

    async list() {
        const connectDb = await createConnection();

        try {
            const patientRecords = await getRepository('PatientRecord').find({ relations: ['client'] });
            return (patientRecords);
        } finally {
            connectDb.close()
        }
    },

    async getId(id) {
        const connectDb = await createConnection();

        try {
            const patientRecord = await getRepository('PatientRecord').findOne(id, { relations: ['client'] });
            return (patientRecord);
        } finally {
            connectDb.close()
        }
    },

    async update(id, fields) {
        const connectDb = await createConnection();

        try {
            await getRepository('PatientRecord').update(id, fields);
            return getId(id);
        } finally {
            connectDb.close()
        }
    },

    async delete(id) {
        const connectDb = await createConnection();

        try {
            await getRepository('PatientRecord').delete(id);
            return { message: 'PatientRecord excluído' };
        } finally {
            connectDb.close()
        }
    },

    async insert(patientRecord) {
        const connectDb = await createConnection();

        try {
            const insertedPatientRecord = await getRepository('PatientRecord').save(patientRecord);
            return insertedPatientRecord;
        } finally {
            connectDb.close()
        }
    },

};