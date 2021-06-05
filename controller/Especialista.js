const especialistaRepository = require('../services/Especialista')


const get = async(req, res) => {
    try {
        const especialistas = await especialistaRepository.list(req.body);
        res.json(especialistas);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar especialistas' });
    }
};

const getOne = async(req, res) => {
    try {
        const especialistas = await especialistaRepository.list(req.params.id);
        res.json(especialistas);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar atendimento' });
    }
};

const deleteOne = async(req, res) => {
    try {
        const especialistas = await especialistaRepository.delete(req.params.id);
        res.json(especialistas);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao deletar atendimento' });
    }
};

const update = async(req, res) => {
    try {
        const { id } = req.params;
        const fields = req.body;
        const especialistas = await especialistaRepository.update(id, fields);
        res.json(especialistas);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar dados do atendimento' });
    }
};

const insert = async(req, res) => {
    try {
        const insertedEspecialista = await especialistaRepository.create(req.body);
        res.json(insertedEspecialista);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar atendimento' });
    }
};

module.exports = {
    get,
    getOne,
    deleteOne,
    update,
    insert
};