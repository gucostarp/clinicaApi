const repository = require('../services/Occupation')

const get = async(req, res) => {

    try {
        const occupations = await repository.list(req.body, req.query);
        res.status(200).json(occupations);
    } catch (error) {
        res.status(404).json(req.t('occupation_list_error'));
    }
};

const getOne = async(req, res) => {

    try {
        const occupations = await repository.detail(req.params.id);
        res.status(200).json(occupations);
    } catch (error) {
        res.status(404).json(req.t('occupation_list_error'));
    }
};

const deleteOne = async(req, res) => {

    try {
        const occupations = await repository.delete(req.params.id);
        res.status(200).json(occupations);
    } catch (error) {
        res.status(404).json(req.t('occupation_deleting_error'));
    }
};

const update = async(req, res) => {

    try {
        const { id } = req.params;
        const fields = req.body;
        const occupations = await repository.update(id, fields);
        res.status(200).json(occupations);
    } catch (error) {
        res.status(404).json(req.t('occupation_updating_error'));
    }
};

const insert = async(req, res) => {

    try {
        const insertedOccupation = await repository.insert(req.body);
        res.status(201).json(insertedOccupation);
    } catch (error) {
        res.status(404).json(req.t('occupation_create_error'));
    }
};

module.exports = {
    get,
    getOne,
    deleteOne,
    update,
    insert
};