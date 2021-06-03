require('dotenv/config');

module.exports = {
    jwt: {
        user: {
            secret: process.env.SECRET,
            expire: process.env.EXPIRE,
        }
    }
}