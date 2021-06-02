const { getConnection } = require('typeorm');

const bcrypt = require('bcrypt');

const login = async (loginData) => {
  // Buscar os dados do usuário LoginData
  // Verificar a senha do user
  // Se a senha estiver correta, gerar o token
  // Se a senha estiver errada, enviar msg
  const userRepository = getConnection().getRepository('User');
  const user = await userRepository.findOne({ username: loginData.username });
  const isValid = bcrypt.compareSync(loginData.password, user.password);
  if (isValid) {
    return true;
  }
  return false;
};

module.exports = {
  login,
};
