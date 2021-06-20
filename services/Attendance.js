const { getConnection } = require('typeorm');

module.exports = {

    async list(data, pages) {
        const findData = { relations: ['client', 'specialist'] };
        if (data) { findData.where = data };
        const connection = getConnection();

        const take = 10;
        const pagination = !pages.page ? 1 : parseInt(pages.page);
        const total = await connection.getRepository('Attendance').find(findData);
        const attendance = await connection.getRepository('Attendance').find({ relations: ['client', 'specialist'], findData, take, skip: take * (pagination - 1) });

        return {
            page: pagination,
            allAttendances: total.length,
            data: attendance
        };

    },

    async detail(id) {
        const connection = getConnection();

        const attendance = await connection.getRepository('Attendance').findOne(id, { relations: ['client', 'specialist'] });
        return (attendance);
    },

    async update(id, fields) {
        const connection = getConnection();

        await connection.getRepository('Attendance').update(id, fields, { relations: ['client', 'specialist'] });
        return detail(id);
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