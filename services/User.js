const { getConnection } = require('typeorm');

const bcrypt = require('bcrypt');

module.exports = {

    async list() {
        const connection = getConnection();

        const users = await connection.getRepository('User').find();
        return users;

    },

    async getId(id) {
        const connection = getConnection();

        const users = await connection.getRepository('User').findOne(id);
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