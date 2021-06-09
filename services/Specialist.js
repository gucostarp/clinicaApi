const { createConnection, getRepository } = require('typeorm');

module.exports = {

    async list() {
        const connectDb = await createConnection();

        try {
            const specialists = await getRepository('Specialist').find({ relations: ['profissao'] });
            return (specialists);
        } finally {
            connectDb.close()
        }
    },

    async getId(id) {
        const connectDb = await createConnection();

        try {
            const specialist = await getRepository('Specialist').findOne(id, { relations: ['profissao'] });
            return (specialist);
        } finally {
            connectDb.close()
        }
    },

    async update(id, fields) {
        const connectDb = await createConnection();

        try {
            await getRepository('Specialist').update(id, fields);
            return getSpecialist(id);
        } finally {
            connectDb.close()
        }
    },


    async delete(id) {
        const connectDb = await createConnection();

        try {
            await getRepository('Specialist').delete(id);
            return { message: 'Specialist excluído' };
        } finally {
            connectDb.close()
        }
    },

    async insert(specialist) {
        const connectDb = await createConnection();

        try {
            const insertedSpecialist = await getRepository('Specialist').save(specialist);
            return insertedSpecialist;
        } finally {
            connectDb.close()
        }
    },

};