const repository = require('../services/Client');
const patientRecordRepository = require('../services/PatientRecord')

const get = async(req, res) => {

    try {
        const client = await repository.list(req.body);
        res.status(200).json(client);
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: 'Error listing clients.' });
    }
};

const getOne = async(req, res) => {

    try {
        const client = await repository.detail(req.params.id);
        res.status(200).json(client);
    } catch (error) {
        res.status(404).json({ message: 'Error listing client.' });
    }
};

const deleteOne = async(req, res) => {

    try {
        const client = await repository.delete(req.params.id);
        res.status(200).json(client);
    } catch (error) {
        res.status(404).json({ message: 'Error deleting clients.' });
    }
};

const update = async(req, res) => {

    try {
        const { id } = req.params;
        const fields = req.body;
        const client = await repository.update(id, fields);
        res.status(200).json(client);
    } catch (error) {
        res.status(404).json({ message: 'Error updating clients.' });
    }
};

const insert = async(req, res) => {

    try {
        const insertedClient = await repository.insert(req.body);

        res.status(201).json(insertedClient);
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: 'Error inserting client.' });
    }
};


module.exports = {
    get,
    getOne,
    deleteOne,
    update,
    insert
};