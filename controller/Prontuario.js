const prontuarioRepository = require('../services/Prontuario');

const get = async(req, res) => {
    try {
        const prontuarios = await prontuarioRepository.getProntuarios(req.body);
        res.json(prontuarios);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar prontuarios' });
    }
};

const getOne = async(req, res) => {
    try {
        const prontuarios = await prontuarioRepository.getProntuario(req.params.id);
        res.json(prontuarios);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar prontuario' });
    }
};

const deleteOne = async(req, res) => {
    try {
        const prontuarios = await prontuarioRepository.deleteProntuario(req.params.id);
        res.json(prontuarios);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao deletar prontuario' });
    }
};

const update = async(req, res) => {
    try {
        const { id } = req.params;
        const fields = req.body;
        const prontuarios = await prontuarioRepository.updateProntuario(id, fields);
        res.json(prontuarios);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar dados do prontuario' });
    }
};

const insert = async(req, res) => {
    try {
        const insertedProntuario = await prontuarioRepository.insertProntuario(req.body);
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