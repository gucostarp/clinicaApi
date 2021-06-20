const repository = require('../services/PatientRecordHistory');

const get = async(req, res) => {

    try {
        const patientRecords = await repository.list(req.query);
        res.status(200).json(patientRecords);
    } catch (error) {
        res.status(404).json(req.t('pat_record_history_list_error'));
    }
};

const getOne = async(req, res) => {

    try {
        const patientRecords = await repository.detail(req.params.id);
        res.status(200).json(patientRecords);
    } catch (error) {
        res.status(404).json(req.t('pat_record_history_list_error'));
    }
};

const deleteOne = async(req, res) => {

    try {
        const patientRecords = await repository.delete(req.params.id);
        res.status(200).json(patientRecords);
    } catch (error) {
        res.status(404).json(req.t('pat_record_history_deleting_error'));
    }
};

const update = async(req, res) => {

    try {
        const { id } = req.params;
        const fields = req.body;
        repository.update(id, fields);
        res.jstatus(200).son(patientRecords);
    } catch (error) {
        res.status(404).json(req.t('pat_record_history_updating_error'));
    }
};

const insert = async(req, res) => {

    try {
        const insertedPatientRecord = await repository.insert(req.body);
        res.status(201).json(insertedPatientRecord);
    } catch (error) {
        res.status(404).json(req.t('pat_record_history_create_error'));
    }
};

module.exports = {
    get,
    getOne,
    deleteOne,
    update,
    insert,
};