const { getConnection } = require('typeorm');

const bcrypt = require('bcrypt');

const getUsers = async () => {
  const userRepository = getConnection().getRepository('User');
  const users = await userRepository.find();
  return users;
};

const getUser = async (id) => {
  const userRepository = getConnection().getRepository('User');
  const users = await userRepository.findOne(id);
  return users;
};

const updateUser = async (id, fields) => {
  const userRepository = getConnection().getRepository('User');

  const fields2 = fields;

  if (!fields.password) {
    const hash = bcrypt.hashSync(fields.password, 10);
    fields2.password = hash;
  }

  await userRepository.update(id, fields2);

  const updatedUser = getUser(id);
  delete updatedUser.password;

  return updatedUser;
};

const deleteUser = async (id) => {
  const userRepository = getConnection().getRepository('User');
  await userRepository.delete(id);
  return { message: 'Usuário excluído' };
};

const insertUser = async (user) => {
  const userRepository = getConnection().getRepository('User');
  const hash = bcrypt.hashSync(user.password, 10);

  const user2 = user;
  user2.password = hash;

  const insertedUser = await userRepository.save(user2);
  delete insertedUser.password;

  return insertedUser;
};

module.exports = {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
  insertUser,
};
