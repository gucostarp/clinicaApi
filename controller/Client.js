const repository = require('../services/Client');
const patientRecordRepository = require('../services/PatientRecord')

const get = async(req, res) => {

    try {
        const client = await repository.list(req.body);
        res.status(200).json(client);
    } catch (error) {
        res.status(404).json({ message: 'Erro ao listar client' });
    }
};

const getOne = async(req, res) => {

    try {
        const client = await repository.detail(req.params.id);
        res.status(200).json(client);
    } catch (error) {
        res.status(404).json({ message: 'Erro ao listar client' });
    }
};

const deleteOne = async(req, res) => {

    try {
        const client = await repository.delete(req.params.id);
        res.status(200).json(client);
    } catch (error) {
        res.status(404).json({ message: 'Erro ao deletar client' });
    }
};

const update = async(req, res) => {

    try {
        const { id } = req.params;
        const fields = req.body;
        const client = await repository.update(id, fields);
        res.status(200).json(client);
    } catch (error) {
        res.status(404).json({ message: 'Erro ao atualizar dados do client' });
    }
};

const insert = async(req, res) => {

    try {
        const insertedClient = await repository.insert(req.body);
        const patientRecord = await patientRecordRepository.insert({ client: insertedClient.id })
        const resultado = (insertedClient, patientRecord)
        res.status(201).json(resultado);
    } catch (error) {
        res.status(404).json({ message: 'Erro ao inserir client' });
    }
};


module.exports = {
    get,
    getOne,
    deleteOne,
    update,
    insert
};