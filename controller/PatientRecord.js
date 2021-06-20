const repository = require('../services/PatientRecord');

const get = async(req, res) => {
    try {
        const patientRecords = await repository.list(req.query);
        res.status(200).json(patientRecords);
    } catch (error) {
        res.status(404).json({ message: 'Error listing patient records.' });
    }
};

const getOne = async(req, res) => {
    try {
        const patientRecords = await repository.detail(req.params.id);
        res.status(200).json(patientRecords);
    } catch (error) {
        res.status(404).json({ message: 'Error listing patient record.' });
    }
};

const deleteOne = async(req, res) => {
    try {
        const patientRecords = await repository.delete(req.params.id);
        res.status(200).json(patientRecords);
    } catch (error) {
        res.status(404).json({ message: 'Error deleting patient record.' });
    }
};

const update = async(req, res) => {
    try {
        const { id } = req.params;
        const fields = req.body;
        const patientRecords = await repository.update(id, fields);
        res.status(200).json(patientRecords);
    } catch (error) {
        res.status(404).json({ message: 'Error updating patient record.' });
    }
};

const insert = async(req, res) => {
    try {
        const insertedPatientRecord = await repository.insert(req.body);
        res.status(201).json(insertedPatientRecord);
    } catch (error) {
        res.status(404).json({ message: 'Error inserting patient record.' });
    }
};

module.exports = {
    get,
    getOne,
    deleteOne,
    update,
    insert,
};