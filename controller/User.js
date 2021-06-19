const repository = require('../services/User')
const { getRepository } = require('typeorm');


get = async(req, res) => {

    try {
        const users = await repository.list(req.body);
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: 'Error listing users.' });
    }
};

getOne = async(req, res) => {

    try {
        const users = await repository.detail(req.params.id);
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: 'Error listing user.' });
    }
};

deleteOne = async(req, res) => {

    try {
        const users = await repository.delete(req.params.id);
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: 'Error deleting user.' });
    }
};

update = async(req, res) => {

    try {
        const { id } = req.params;
        const fields = req.body;
        const users = await repository.update(id, fields);
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: 'Error updating user.' });
    }
};

insert = async(req, res) => {

    const { username, password } = req.body;

    try {
        const repo = getRepository('User');
        const findUser = await repo.findOne({
            where: { username },
        });
        if (findUser) {
            return res.status(403).json({ message: 'Nome de usuário já existe.' });
        }
        if (username.length > 20) {
            return res.status(403).json({ message: 'Nome de usuário deve ter menos de 20 caracteres.' });
        }
        if (password.length < 6) {
            return res.status(403).json({ message: 'A senha deve ter mais de 6 caracteres.' });
        }

        const insertedUser = await repository.insert(req.body);
        res.status(201).json(insertedUser);
    } catch (error) {
        return res.status(401).json({ message: 'Error inserting user.' });

    }
};

module.exports = {
    get,
    getOne,
    deleteOne,
    update,
    insert,

};