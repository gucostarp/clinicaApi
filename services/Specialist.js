const { getConnection } = require('typeorm');

module.exports = {

    async list(data, pages) {
        const findData = { relations: ['address', 'occupation'] };
        if (data) { findData.where = data }

        const connection = getConnection();

        const take = 10;
        const pagination = !pages.page ? 1 : parseInt(pages.page);
        const total = await connection.getRepository('Specialist').find(findData);
        const specialists = await connection.getRepository('Specialist').find(findData, { take, skip: take * (pagination - 1) });

        return {
            page: pagination,
            allUsers: total.length,
            data: specialists
        };
    },

    async detail(id) {
        const connection = getConnection();

        const specialist = await connection.getRepository('Specialist').findOne(id, { relations: ['address', 'occupation'] });
        return (specialist);
    },

    async update(id, fields) {
        const connection = getConnection();

        const repository = await connection.getRepository('Specialist');
        const specialist = await repository.findOne(id, { relations: ['address', 'occupation'] })
        repository.merge(specialist, fields)
        const result = await repository.save(specialist);

        return result;
    },

    async delete(id) {
        const connection = getConnection();

        await connection.getRepository('Specialist').delete(id);
        return { message: 'Specialist excluído' };
    },

    async insert(data) {
        const connection = getConnection();

        const insertedSpecialist = await connection.getRepository('Specialist').save(data);
        return insertedSpecialist;
    },

};