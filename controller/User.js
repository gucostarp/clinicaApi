const userRepository = require('../services/User')

get = async(req, res) => {
    try {
        const users = await userRepository.getUsers(req.body);
        res.json(users);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar usuários' });
    }
};

getOne = async(req, res) => {
    try {
        const users = await userRepository.getUser(req.params.id);
        res.json(users);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar usuário' });
    }
};

deleteOne = async(req, res) => {
    try {
        const users = await userRepository.deleteOne(req.params.id);
        res.json(users);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao deletar usuário' });
    }
};

update = async(req, res) => {
    try {
        const { id } = req.params;
        const fields = req.body;
        const users = await userRepository.updateUser(id, fields);
        res.json(users);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar dados do usuário' });
    }
};

insert = async(req, res) => {
    try {
        const insertedUser = await userRepository.insertUser(req.body);
        res.json(insertedUser);
    } catch (error) {

        console.log(error)
        res.status(400).json({ message: 'Erro ao criar usuário' });

    }
};


module.exports = {
    get,
    getOne,
    deleteOne,
    update,
    insert,
};