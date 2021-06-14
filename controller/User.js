const repository = require('../services/User')

get = async(req, res) => {

    try {
        const users = await repository.list(req.body);
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar usuários' });
    }
};

getOne = async(req, res) => {

    try {
        const users = await repository.detail(req.params.id);
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar usuário' });
    }
};

deleteOne = async(req, res) => {

    try {
        const users = await repository.delete(req.params.id);
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao deletar usuário' });
    }
};

update = async(req, res) => {
    try {
        const { id } = req.params;
        const fields = req.body;
        const users = await repository.update(id, fields);
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar dados do usuário' });
    }
};

insert = async(req, res) => {

    try {
        const insertedUser = await repository.insert(req.body);
        res.status(201).json(insertedUser);
    } catch (error) {

        console.log(error)
        res.status(401).json({ message: 'Erro ao criar usuário' });

    }
};

module.exports = {
    get,
    getOne,
    deleteOne,
    update,
    insert,
};