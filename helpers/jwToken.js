const jwt = require('jsonwebtoken');

const env = require('../env.js');

module.exports = class JwToken {
    static makeToken(user) {
        return jwt.sign({ id: user.id }, env.jwt.user.secret, { expiresIn: env.jwt.user.expire });
    }
};