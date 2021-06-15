const repository = require('../services/Auth')
const JwToken = require('../helpers/jwToken')
const bcrypt = require('bcrypt');

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
        console.log(erro);

        return res.status(401).json(erro);
    }
}

module.exports = { login };