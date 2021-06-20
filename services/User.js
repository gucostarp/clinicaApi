const { getConnection } = require('typeorm');

const bcrypt = require('bcrypt');

module.exports = {

    async list(data, pages) {
        const findData = { select: ['id', 'name', 'username'] };
        if (data) { findData.where = data };
        const connection = getConnection();

        const take = 10;
        const pagination = !pages.page ? 1 : parseInt(pages.page);
        const total = await connection.getRepository('User').find(findData);
        const users = await connection.getRepository('User').find({ findData, take, skip: take * (pagination - 1) });

        return {
            page: pagination,
            allUsers: total.length,
            data: users
        };
    },

    async detail(id) {

        const connection = getConnection();

        const users = await connection.getRepository('User').findOne(id, { select: ['id', 'name', 'username'] });
        return users;

    },

    async update(id, fields) {
        const connection = getConnection();

        const fields2 = fields;

        if (!fields.password) {
            const hash = bcrypt.hashSync(fields.password, 10);
            fields2.password = hash;
        }

        await connection.getRepository('User').update(id, fields2);

        const updatedUser = getUser(id);
        delete updatedUser.password;

        return updatedUser;

    },

    async delete(id) {
        const connection = getConnection();


        await connection.getRepository('User').delete(id);
        return { message: 'Usuário excluído' };

    },

    async insert(user) {
        const connection = await getConnection();


        const hash = bcrypt.hashSync(user.password, 10);

        const user2 = user;
        user2.password = hash;

        const insertedUser = await connection.getRepository("User").save(user2);
        delete insertedUser.password, insertedUser.username;

        return insertedUser;


    },
};