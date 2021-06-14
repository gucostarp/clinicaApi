const { getConnection } = require('typeorm');

module.exports = {

    async list() {
        const connection = getConnection();

        const client = await connection.getRepository('Client').find({ relations: ['address'] });
        return client;

    },

    async detail(id) {
        const connection = getConnection();

        const client = await connection.getRepository('Client').findOne(id);
        return client;

    },

    async update(id, fields) {
        const connection = getConnection();

        await connection.getRepository('Client').update(id, fields);
        return getClient(id);

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