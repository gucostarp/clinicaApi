const { getConnection } = require('typeorm');

module.exports = {

    async list(data, pages) {
        const connection = getConnection();

        const take = 10;
        const pagination = !pages.page ? 1 : parseInt(pages.page);
        const total = await connection.getRepository('Occupation').find(data);
        const occupations = await connection.getRepository('Occupation').find({ take, skip: take * (pagination - 1), order: { name: "ASC" } });

        return {
            page: pagination,
            allOccupations: total.length,
            data: occupations
        };
    },

    async detail(id) {
        const connection = getConnection();

        const specialist = await connection.getRepository('Occupation').findOne({ id, order: { name: "ASC" } });
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
        return { message: req.t('occupation_deleted') };
    },

    async insert(profissao) {
        const connection = getConnection();

        const insertedOccupation = await connection.getRepository('Occupation').save(profissao);
        return insertedOccupation;
    },

};