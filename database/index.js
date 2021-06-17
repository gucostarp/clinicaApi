const { createConnection } = require('typeorm');

module.exports = async function startDB() {
    try {
        await createConnection();
        console.log('Connected to database');
    } catch (error) {
        console.log('Error connecting to database', error);
    }
};