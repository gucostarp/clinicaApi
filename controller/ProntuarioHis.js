const prontuarioHisRepository = require('../services/ProntuarioHis');

const get = async(req, res) => {
    try {
        const prontuarios = await prontuarioHisRepository.list(req.body);
        res.json(prontuarios);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar prontuarios' });
    }
};

const getOne = async(req, res) => {
    try {
        const prontuarios = await prontuarioHisRepository.list(req.params.id);
        res.json(prontuarios);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar prontuario' });
    }
};

const deleteOne = async(req, res) => {
    try {
        const prontuarios = await prontuarioHisRepository.delete(req.params.id);
        res.json(prontuarios);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao deletar prontuario' });
    }
};

const update = async(req, res) => {
    try {
        const { id } = req.params;
        const fields = req.body;
        prontuarioHisRepository.update(id, fields);
        res.json(prontuarios);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar dados do prontuario' });
    }
};

const insert = async(req, res) => {
    try {
        const insertedProntuario = await prontuarioHisRepository.create(req.body);
        res.json(insertedProntuario);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar prontuario' });
    }
};

module.exports = {
    get,
    getOne,
    deleteOne,
    update,
    insert,
};