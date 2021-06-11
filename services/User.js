const { createConnection, getRepository } = require('typeorm');

const bcrypt = require('bcrypt');

module.exports = {

    async list() {
        const connectDb = await createConnection();

        try {
            const users = await getRepository('User').find();
            return users;
        } finally {
            connectDb.close()
        }
    },

    async getId(id) {
        const connectDb = await createConnection();

        try {
            const users = await getRepository('User').findOne(id);
            return users;
        } finally {
            connectDb.close()
        }
    },

    async update(id, fields) {
        const connectDb = await createConnection();

        try {
            const fields2 = fields;

            if (!fields.password) {
                const hash = bcrypt.hashSync(fields.password, 10);
                fields2.password = hash;
            }

            await getRepository('User').update(id, fields2);

            const updatedUser = getUser(id);
            delete updatedUser.password;

            return updatedUser;
        } finally {
            connectDb.close()
        }
    },

    async delete(id) {
        const connectDb = await createConnection();

        try {
            await getRepository('User').delete(id);
            return { message: 'Usuário excluído' };
        } finally {
            connectDb.close()
        }
    },

    async insert(user) {
        const connectDb = await createConnection();

        try {
            const hash = bcrypt.hashSync(user.password, 10);

            const user2 = user;
            user2.password = hash;

            const insertedUser = await getRepository("User").save(user2);
            delete insertedUser.password;

            return insertedUser;
        } finally {
            connectDb.close()
        }
    },

};