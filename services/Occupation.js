const { getConnection } = require('typeorm');

module.exports = {

    async list() {
        const connection = getConnection();

        const occupations = await connection.getRepository('Occupation').find();
        return (occupations);

    },

    async getId(id) {
        const connection = getConnection();

        const specialist = await connection.getRepository('Occupation').findOne(id);
        return (specialist);

    },

    async update(id, fields) {
        const connection = getConnection();

        await connection.getRepository('Occupation').update(id, fields);
        return getOccupation(id);

    },

    async delete(id) {
        const connection = getConnection();

        await connection.getRepository('Occupation').delete(id);
        return { message: 'Occupation excluído' };

    },

    async insert(profissao) {
        const connection = getConnection();

        const insertedOccupation = await connection.getRepository('Occupation').save(profissao);
        return insertedOccupation;

    },

};