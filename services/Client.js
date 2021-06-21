const { getConnection } = require('typeorm');

module.exports = {

    async list(data, pages) {
        const findData = { relations: ['address'] }
        if (data) { findData.where = data };
        const connection = getConnection();

        const take = 10;
        const pagination = !pages.page ? 1 : parseInt(pages.page);
        const total = await connection.getRepository('Client').find(findData);
        const client = await connection.getRepository('Client').find({ relations: ['address'], findData, take, skip: take * (pagination - 1), order: { name: "ASC" } });

        return {
            page: pagination,
            allClients: total.length,
            data: client
        };
    },

    async detail(id) {
        const connection = getConnection();

        const client = await connection.getRepository('Client').findOne({ id, relations: ['address'], order: { name: "ASC" } });
        return client;
    },

    async update(id, fields) {
        const connection = getConnection();

        const repository = await connection.getRepository('Client');
        const client = await repository.findOne({ id, relations: ['address'], order: { name: "ASC" } });
        repository.merge(client, fields)
        const result = await repository.save(client)
        return result;
    },

    async delete(id) {
        const connection = getConnection();

        await connection.getRepository('Client').delete(id);
        return { message: req.t('client_deleted') };
    },

    async insert(client) {
        const connection = getConnection();

        const insertedClient = await connection.getRepository('Client').save(client);
        return insertedClient;
    },

}