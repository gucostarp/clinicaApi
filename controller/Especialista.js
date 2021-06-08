const especialistaRepository = require('../services/Especialista')


const get = async(req, res) => {
    try {
        const especialistas = await especialistaRepository.getEspecialistas(req.body);
        res.json(especialistas);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar especialistas' });
    }
};

const getOne = async(req, res) => {
    try {
        const especialistas = await especialistaRepository.getEspecialista(req.params.id);
        res.json(especialistas);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar especialista' });
    }
};

const deleteOne = async(req, res) => {
    try {
        const especialistas = await especialistaRepository.deleteEspecialista(req.params.id);
        res.json(especialistas);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao deletar especialista' });
    }
};

const update = async(req, res) => {
    try {
        const { id } = req.params;
        const fields = req.body;
        const especialistas = await especialistaRepository.updateEspecialista(id, fields);
        res.json(especialistas);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar dados do especialista' });
    }
};

const insert = async(req, res) => {
    try {
        const insertedEspecialista = await especialistaRepository.insertEspecialista(req.body);
        res.json(insertedEspecialista);
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'Erro ao inserir especialista' });
    }
};

module.exports = {
    get,
    getOne,
    deleteOne,
    update,
    insert
};