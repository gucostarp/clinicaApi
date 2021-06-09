const repository = require('../services/PatientRecord');

const get = async(req, res) => {
    try {
        const patientRecords = await repository.list(req.body);
        res.status(200).json(patientRecords);
    } catch (error) {
        res.status(404).json({ message: 'Erro ao listar patientRecords' });
    }
};

const getOne = async(req, res) => {
    try {
        const patientRecords = await repository.getId(req.params.id);
        res.status(200).json(patientRecords);
    } catch (error) {
        res.status(404).json({ message: 'Erro ao listar patientRecord' });
    }
};

const deleteOne = async(req, res) => {
    try {
        const patientRecords = await repository.delete(req.params.id);
        res.status(200).json(patientRecords);
    } catch (error) {
        res.status(404).json({ message: 'Erro ao deletar patientRecord' });
    }
};

const update = async(req, res) => {
    try {
        const { id } = req.params;
        const fields = req.body;
        const patientRecords = await repository.update(id, fields);
        res.status(200).json(patientRecords);
    } catch (error) {
        res.status(404).json({ message: 'Erro ao atualizar dados do patientRecord' });
    }
};

const insert = async(req, res) => {
    try {
        const insertedPatientRecord = await repository.insert(req.body);
        res.status(201).json(insertedPatientRecord);
    } catch (error) {
        res.status(404).json({ message: 'Erro ao criar patientRecord' });
    }
};

module.exports = {
    get,
    getOne,
    deleteOne,
    update,
    insert,
};