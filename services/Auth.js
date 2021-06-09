const { createConnection, getRepository } = require('typeorm');

module.exports = {
    async list(loginData) {
        const connectDB = await createConnection();

        try {
            const result = await getRepository('User').findOne({ username: loginData.username });
            return result;
        } finally {
            connectDB.close();
        }
    },
};