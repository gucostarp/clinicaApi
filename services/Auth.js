const { getConnection } = require('typeorm');

module.exports = {
    async list(loginData) {
        const connection = getConnection();
        const result = await connection.getRepository('User').findOne({ username: loginData.username });
        return result;
    },
};