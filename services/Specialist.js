const { getConnection } = require('typeorm');

module.exports = {

    async list() {
        const connection = getConnection();

        const specialists = await connection.getRepository('Specialist').find({ relations: ['profissao'] });
        return (specialists);

    },

    async detail(id) {
        const connection = getConnection();

        const specialist = await connection.getRepository('Specialist').findOne(id, { relations: ['profissao'] });
        return (specialist);

    },

    async update(id, fields) {
        const connection = getConnection();

        await connection.getRepository('Specialist').update(id, fields);
        return getSpecialist(id);

    },


    async delete(id) {
        const connection = getConnection();

        await connection.getRepository('Specialist').delete(id);
        return { message: 'Specialist excluído' };

    },

    async insert(specialist) {
        const connection = getConnection();

        const insertedSpecialist = await connection.getRepository('Specialist').save(specialist);
        return insertedSpecialist;

    },

};