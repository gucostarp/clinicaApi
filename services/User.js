const { getConnection } = require('typeorm');

const bcrypt = require('bcrypt');

module.exports = {

    async list(data) {
        const findData = { select: ['id', 'name', 'username'] };
        if (data) { findData.where = data };
        const connection = getConnection();

        const users = await connection.getRepository('User')
            .createQueryBuilder(data)
            .take(5)
            .skip(0)
            .getMany()
        return users;

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

        const errors = [];

        const findUser = await connection.getRepository('User').findOne({ where: { username: user.username } })
        if (findUser) {
            errors.push({ message: 'Usuário já cadastrado!' })
        }

        if (user.password < 6) {
            errors.push({ message: 'Password deve ter mais que 6 caracteres!' })
        }


        if (user.username.length > 20) {
            errors.push({ message: 'O usuário pode ter no máximo 20 caracteres!' })
        }

        if (errors.length == 0) {

            const hash = bcrypt.hashSync(user.password, 10);

            const user2 = user;
            user2.password = hash;

            const insertedUser = await connection.getRepository("User").save(user2);
            delete insertedUser.password, insertedUser.username;

            return insertedUser;

        } else {
            return response.status(404).json(errors)
        }
    },
};