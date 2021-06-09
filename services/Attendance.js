const { createConnection, getRepository } = require('typeorm');

module.exports = {

    async list(filter) {
        const connectDb = await createConnection();

        try {
            const findArguments = { relations: ['client', 'specialist'] };

            if (filter) { findArguments.where = filter; }

            const attendance = await getRepository('Attendance').find(findArguments);
            return (attendance);
        } finally {
            connectDb.close()
        }
    },

    async getId(id) {
        const connectDb = await createConnection();

        try {
            const attendance = await getRepository('Attendance').findOne(id, { relations: ['client', 'specialist'] });
            return (attendance);
        } finally {
            connectDb.close()
        }
    },

    async update(id, fields) {
        const connectDb = await createConnection();

        try {
            await getRepository('Attendance').update(id, fields, { relations: ['client', 'specialist'] });
            return getId(id);
        } finally {
            connectDb.close()
        }

    },

    async delete(id) {
        const connectDb = await createConnection();

        try {
            await getRepository('Attendance').delete(id);
            return { message: 'Attendance deleted' };
        } finally {
            connectDb.close()
        }
    },

    async insert(attendance) {
        const connectDb = await createConnection();

        try {
            const insertedAttendance = await getRepository('Attendance').save(attendance);
            return insertedAttendance;
        } finally {
            connectDb.close()
        }
    }

}