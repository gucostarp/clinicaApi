const { getConnection } = require('typeorm');

const getUsers = async() => {
    const userRepository = getConnection().getRepository('User');
    const users = await userRepository.find();
    return users;
};

const getUser = async(id) => {
    const userRepository = getConnection().getRepository('User');
    const users = await userRepository.findOne(id);
    return users;
};

const updateUser = async(id, fields) => {
    const userRepository = getConnection().getRepository('User');
    await userRepository.update(id, fields);
    return getUser(id);
};

const deleteUser = async(id) => {
    const userRepository = getConnection().getRepository('User');
    await userRepository.delete(id);
    return { message: 'Usuário excluído' };
};

const insertUser = async(user) => {
    const userRepository = getConnection().getRepository('User');
    const insertedUser = await userRepository.save(user);
    return insertedUser;
};

module.exports = {
    updateUser,
    deleteUser,
    getUser,
    getUsers,
    insertUser,
};