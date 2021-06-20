const repository = require('../services/PatientRecord');

const get = async(req, res) => {

    try {
        const patientRecords = await repository.list(req.query);
        res.status(200).json(patientRecords);
    } catch (error) {
        res.status(404).json(req.t('patient_record_list_error'));
    }
};

const getOne = async(req, res) => {

    try {
        const patientRecords = await repository.detail(req.params.id);
        res.status(200).json(patientRecords);
    } catch (error) {
        res.status(404).json(req.t('patient_record_list_error'));
    }
};

const deleteOne = async(req, res) => {

    try {
        const patientRecords = await repository.delete(req.params.id);
        res.status(200).json(patientRecords);
    } catch (error) {
        res.status(404).json(req.t('patient_record_deleting_error'));
    }
};

const update = async(req, res) => {

    try {
        const { id } = req.params;
        const fields = req.body;
        const patientRecords = await repository.update(id, fields);
        res.status(200).json(patientRecords);
    } catch (error) {
        res.status(404).json(req.t('patient_record_updating_error'));
    }
};

const insert = async(req, res) => {

    try {
        const insertedPatientRecord = await repository.insert(req.body);
        res.status(201).json(insertedPatientRecord);
    } catch (error) {
        res.status(404).json(req.t('patient_record_create_error'));
    }
};

module.exports = {
    get,
    getOne,
    deleteOne,
    update,
    insert,
};