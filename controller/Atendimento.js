const atendimentoRepository = require('../services/Atendimento');

const get = async(req, res) => {
    try {
        const atendimentos = await atendimentoRepository.list(req.body);
        res.json(atendimentos);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar atendimentos' });
    }
};

const getOne = async(req, res) => {
    try {
        const atendimentos = await atendimentoRepository.list(req.params.id);
        res.json(atendimentos);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar atendimento' });
    }
};

const deleteOne = async(req, res) => {
    try {
        const atendimentos = await atendimentoRepository.delete(req.params.id);
        res.json(atendimentos);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao deletar atendimento' });
    }
};

const update = async(req, res) => {
    try {
        const { id } = req.params;
        const fields = req.body;
        const atendimentos = await atendimentoRepository.update(id, fields);
        res.json(atendimentos);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar dados do atendimento' });
    }
};

const insert = async(req, res) => {
    try {
        const insertedAtendimento = await atendimentoRepository.create(req.body);
        res.json(insertedAtendimento);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar atendimento' });
    }
};

module.exports = {
    get,
    getOne,
    deleteOne,
    update,
    insert,
};