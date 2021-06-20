const repository = require('../services/Specialist')


const get = async(req, res) => {

    try {
        const specialists = await repository.list(req.body, req.query);
        res.status(200).json(specialists);
    } catch (error) {
        res.status(404).json({ message: 'Error listing specialists.' });
    }
};

const getOne = async(req, res) => {

    try {
        const specialists = await repository.detail(req.params.id);
        res.status(200).json(specialists);
    } catch (error) {
        res.status(404).json({ message: 'Error listing specialist.' });
    }
};

const deleteOne = async(req, res) => {

    try {
        const specialists = await repository.delete(req.params.id);
        res.status(200).json(specialists);
    } catch (error) {
        res.status(404).json({ message: 'Error deleting specialist.' });
    }
};

const update = async(req, res) => {

    try {
        const { id } = req.params;
        const fields = req.body;
        const specialists = await repository.update(id, fields);
        res.status(200).json(specialists);
    } catch (error) {
        res.status(404).json({ message: 'Error updating specialist.' });
    }
};

const insert = async(req, res) => {

    try {
        const insertedSpecialist = await repository.insert(req.body);
        res.status(201).json(insertedSpecialist);
    } catch (error) {
        res.status(404).json({ message: 'Error inserting specialists.' });
    }
};

module.exports = {
    get,
    getOne,
    deleteOne,
    update,
    insert
};