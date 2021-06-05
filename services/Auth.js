const { createConnection, getRepository } = require('typeorm');

module.exports = {
    async getOne(loginData) {
        const connectDB = await createConnection();
        try {
            const userRepository = getRepository('User');
            const result = await userRepository.findOne({ username: loginData.username });
            return result;
        } finally {
            connectDB.close();
        }
    },
};