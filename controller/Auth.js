const repository = require('../services/Auth')
const JwToken = require('../helpers/jwToken')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function login(req, res) {
    const { username, password } = req.body;

    try {
        const user = await repository.list({ username });

        if (!user) {
            return res.status(401).json({
                message: 'Wrong login or password!',
            });
        }

        const compareHash = await bcrypt.compare(password, user.password);

        if (!compareHash) {
            return res.status(401).json({
                message: 'Wrong login or password!',
            });
        }

        delete user.password;
        user.token = JwToken.makeToken(user);
        return res.status(200).json(user);
    } catch (erro) {
        return res.status(401).json(erro);
    }
}

async function refreshToken(req, res) {
    try {
        const token = req.header('Authorization')
        const decoded = jwt.verify(token, process.env.SECRET);

        user = decoded
        user.token = JwToken.makeToken(user);
        return res.status(200).json(user);
    } catch (err) {
        res.status(401).json({ message: 'Acesso não autorizado!' });
    }
}

module.exports = {
    login,
    refreshToken
};