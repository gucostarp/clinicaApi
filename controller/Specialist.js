const repository = require('../services/Specialist')


const get = async(req, res) => {

    try {
        const specialists = await repository.list(req.body, req.query);
        res.status(200).json(specialists);
    } catch (error) {
        res.status(404).json(req.t('specialist_list_error'));
    }
};

const getOne = async(req, res) => {

    try {
        const specialists = await repository.detail(req.params.id);
        res.status(200).json(specialists);
    } catch (error) {
        res.status(404).json(req.t('specialist_list_error'));
    }
};

const deleteOne = async(req, res) => {

    try {
        const specialists = await repository.delete(req.params.id);
        res.status(200).json(specialists);
    } catch (error) {
        res.status(404).json(req.t('specialist_deleting_error'));
    }
};

const update = async(req, res) => {

    try {
        const { id } = req.params;
        const fields = req.body;
        const specialists = await repository.update(id, fields);
        res.status(200).json(specialists);
    } catch (error) {
        res.status(404).json(req.t('specialist_updating_error'));
    }
};

const insert = async(req, res) => {

    try {
        const insertedSpecialist = await repository.insert(req.body);
        res.status(201).json(insertedSpecialist);
    } catch (error) {
        res.status(404).json(req.t('specialist_create_error'));
    }
};

module.exports = {
    get,
    getOne,
    deleteOne,
    update,
    insert
};