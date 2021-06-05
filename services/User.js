const { createConnection, getRepository } = require('typeorm');

const bcrypt = require('bcrypt');

module.exports = {

    async getUsers() {
        const connectDb = await createConnection();

        try {
            const userRepository = getRepository('User');
            const users = await userRepository.find();
            return users;
        } finally {
            connectDb.close()
        }
    },

    async getUser(id) {
        const connectDb = await createConnection();

        try {
            const userRepository = getRepository('User');
            const users = await userRepository.findOne(id);
            return users;
        } finally {
            connectDb.close()
        }
    },

    async updateUser(id, fields) {
        const connectDb = await createConnection();

        try {
            const userRepository = getRepository('User');

            const fields2 = fields;

            if (!fields.password) {
                const hash = bcrypt.hashSync(fields.password, 10);
                fields2.password = hash;
            }

            await userRepository.update(id, fields2);

            const updatedUser = getUser(id);
            delete updatedUser.password;

            return updatedUser;
        } finally {
            connectDb.close()
        }
    },

    async deleteUser(id) {
        const connectDb = await createConnection();

        try {
            const userRepository = getRepository('User');
            await userRepository.delete(id);
            return { message: 'Usuário excluído' };
        } finally {
            connectDb.close()
        }
    },

    async insertUser(user) {
        const connectDb = await createConnection();
        console.log(user)
        try {
            const userRepository = getRepository('User');
            const hash = bcrypt.hashSync(user.password, 10);

            const user2 = user;
            user2.password = hash;

            const insertedUser = await userRepository.save(user2);
            delete insertedUser.password;

            return insertedUser;
        } finally {
            connectDb.close()
        }
    },

};