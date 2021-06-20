const repository = require('../services/User')
const { getRepository } = require('typeorm');

get = async(req, res) => {

    try {

        const users = await repository.list(req.body, req.query);

        res.status(200).json(users);
    } catch (error) {
        res.status(400).json(req.t('user_list_error'));
    }
};

getOne = async(req, res) => {

    try {
        const users = await repository.detail(req.params.id);
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json(req.t('user_list_error'));
    }
};

deleteOne = async(req, res) => {

    try {
        const users = await repository.delete(req.params.id);
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json(req.t('user_deleting_error'));
    }
};

update = async(req, res) => {

    try {
        const { id } = req.params;
        const fields = req.body;
        const users = await repository.update(id, fields);
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json(req.t('user_uptading_error'));
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
            return res.status(403).json(req.t('user_username_duplicate'));
        }
        if (username.length > 20) {
            return res.status(403).json(req.t('user_username_length'));
        }
        if (password.length < 6) {
            return res.status(403).json(req.t('user_password_lenght'));
        }
        const insertedUser = await repository.insert(req.body);
        res.status(201).json(insertedUser);
    } catch (error) {
        return res.status(401).json(req.t('user_create_error'));


    }
};

module.exports = {
    get,
    getOne,
    deleteOne,
    update,
    insert,
};