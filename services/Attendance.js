const { createConnection, getConnection, getRepository } = require('typeorm');

module.exports = {

    async list(filter) {
        const connection = getConnection();

        const findArguments = { relations: ['client', 'specialist'] };

        if (filter) { findArguments.where = filter; };

        const attendance = connection.getRepository('Attendance').find(findArguments);
        return (attendance);

    },

    async getId(id) {
        const connection = getConnection();

        const attendance = await connection.getRepository('Attendance').findOne(id, { relations: ['client', 'specialist'] });
        return (attendance);

    },

    async update(id, fields) {
        const connection = getConnection();

        await connection.getRepository('Attendance').update(id, fields, { relations: ['client', 'specialist'] });
        return getId(id);


    },

    async delete(id) {
        const connection = getConnection();

        await connection.getRepository('Attendance').delete(id);
        return { message: 'Attendance deleted' };

    },

    async insert(attendance) {
        const connection = getConnection();

        const insertedAttendance = await connection.getRepository('Attendance').save(attendance);
        return insertedAttendance;

    }

}