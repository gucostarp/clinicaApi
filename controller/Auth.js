const { getConnection } = require('typeorm');
const JwToken = require('../helpers/jwToken')
const bcrypt = require('bcrypt');

const login = async(loginData) => {
    const userRepository = getConnection().getRepository('User');
    const user = await userRepository.findOne({ username: loginData.username });
    if (user && bcrypt.compareSync(loginData.password, user.password)) {
        delete user.password;
        user.token = JwToken.makeToken(user);
        return user;
    } else {
        return {
            mensagem: 'Login ou senha inválidos'
        }
    }
}


module.exports = {
    login,
};