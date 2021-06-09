const repository = require('../services/Auth')
const JwToken = require('../helpers/jwToken')
const bcrypt = require('bcrypt');

async function login(req, res) {

    const { username, password } = req.body;

    try {
        const user = await repository.list({ username });

        if (user && bcrypt.compare(password, user.password)) {
            delete user.password;
            user.token = JwToken.makeToken(user);
            return res.status(200).json(user);
        }
        return res.send({
            message: 'Wrong login or password!',
        });
    } catch (erro) {
        console.log(erro)

        return res.status(400).json(erro);
    }
}

module.exports = { login };