const { getConnection } = require('typeorm');

module.exports = {

    async list(data, pages) {
        const findData = { relations: ['address'] }
        if (data) { findData.where = data };
        const connection = getConnection();

        const take = 10;
        const pagination = !pages.page ? 1 : parseInt(pages.page);
        const total = await connection.getRepository('Client').find(findData);
        const client = await connection.getRepository('Client').find(findData, { take, skip: take * (pagination - 1) });

        return {
            page: pagination,
            allUsers: total.length,
            data: client
        };
    },

    async detail(id) {
        const connection = getConnection();

        const client = await connection.getRepository('Client').findOne(id, { relations: ['address'] });
        return client;
    },

    async update(id, fields) {
        const connection = getConnection();

        const repository = await connection.getRepository('Client');
        const client = await repository.findOne(id, { relations: ['address'] });
        repository.merge(client, fields)
        const result = await repository.save(client)
        return result;


    },

    async delete(id) {
        const connection = getConnection();

        await connection.getRepository('Client').delete(id);
        return { message: 'Client excluído' };
    },

    async insert(client) {
        const connection = getConnection();

        const insertedClient = await connection.getRepository('Client').save(client);
        return insertedClient;
    },

}