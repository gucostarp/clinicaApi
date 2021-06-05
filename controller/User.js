const userRepository = require('../services/User')

const get = async(req, res) => {
    try {
        const users = await userRepository.list(req.body);
        res.json(users);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar usuários' });
    }
};

const getOne = async(req, res) => {
    try {
        const users = await userRepository.list(req.params.id);
        res.json(users);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar usuário' });
    }
};

const deleteOne = async(req, res) => {
    try {
        const users = await userRepository(req.params.id);
        res.json(users);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao deletar usuário' });
    }
};

const update = async(req, res) => {
    try {
        const { id } = req.params;
        const fields = req.body;
        const users = await userRepository.update(id, fields);
        res.json(users);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar dados do usuário' });
    }
};

const insert = async(req, res) => {
    try {
        const insertedUser = await userRepository.create(req.body);
        res.json(insertedUser);
    } catch (error) {
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