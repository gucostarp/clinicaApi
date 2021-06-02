const { getConnection } = require('typeorm');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (loginData) => {
  const userRepository = getConnection().getRepository('User');
  const user = await userRepository.findOne({ username: loginData.username });
  const isValid = bcrypt.compareSync(loginData.password, user.password);
  if (isValid) {
    const token = jwt.sign({ userId: user.id }, 'shhhhh');
    return true;
  }
  return false;
};

module.exports = {
  login,
};
