const { createConnection, getRepository } = require('typeorm');

module.exports = {

    async list() {
        const connectDb = await createConnection();

        try {
            const occupations = await getRepository('Occupation').find();
            return (occupations);
        } finally {
            connectDb.close()
        }
    },

    async getId(id) {
        const connectDb = await createConnection();

        try {
            const specialist = await getRepository('Occupation').findOne(id);
            return (specialist);
        } finally {
            connectDb.close()
        }
    },

    async update(id, fields) {
        const connectDb = await createConnection();

        try {
            await getRepository('Occupation').update(id, fields);
            return getOccupation(id);
        } finally {
            connectDb.close()
        }
    },

    async delete(id) {
        const connectDb = await createConnection();

        try {
            await getRepository('Occupation').delete(id);
            return { message: 'Occupation excluído' };
        } finally {
            connectDb.close()
        }
    },

    async insert(profissao) {
        const connectDb = await createConnection();

        try {
            const insertedOccupation = await getRepository('Occupation').save(profissao);
            return insertedOccupation;
        } finally {
            connectDb.close()
        }
    },

};