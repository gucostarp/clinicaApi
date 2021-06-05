const userRepository = require('../services/Auth')
const JwToken = require('../helpers/jwToken')
const bcrypt = require('bcrypt');

async function login(req, res) {
    const { username, password } = req.body;
    try {
        const user = await userRepository.getOne({ username });

        if (user && bcrypt.compare(password, user.password)) {
            delete user.password;
            user.token = JwToken.makeToken(user);
            return res.json(user);
        }
        return res.send({
            message: 'Login ou senha inválidos',
        });
    } catch (erro) {
        console.log(erro)
        return res.status(400).json(erro);
    }
}

module.exports = { login };