const { createConnection, getRepository } = require('typeorm');

module.exports = {

    async list() {
        const connectDb = await createConnection();

        try {
            const client = await getRepository('Client').find({ relations: ['address'] });
            return client;
        } finally {
            connectDb.close()
        }
    },

    async getId(id) {
        const connectDb = await createConnection();

        try {
            const client = await getRepository('Client').findOne(id);
            return client;
        } finally {
            connectDb.close()
        }
    },

    async update(id, fields) {
        const connectDb = await createConnection();

        try {
            await getRepository('Client').update(id, fields);
            return getClient(id);
        } finally {
            connectDb.close()
        }
    },

    async delete(id) {
        const connectDb = await createConnection();

        try {
            await getRepository('Client').delete(id);
            return { message: 'Client excluído' };
        } finally {
            connectDb.close()
        }
    },

    async insert(client) {
        const connectDb = await createConnection();

        try {
            const insertedClient = await getRepository('Client').save(client);
            return insertedClient;
        } finally {
            connectDb.close()
        }
    },

}