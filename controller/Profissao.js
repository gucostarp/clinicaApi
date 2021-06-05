const profissaoRepository = require('../services/Profissao')

const get = async(req, res) => {
    try {
        const profissoes = await profissaoRepository.list(req.body);
        res.json(profissoes);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar profissões' });
    }
};

const getOne = async(req, res) => {
    try {
        const profissoes = await profissaoRepository.list(req.params.id);
        res.json(profissoes);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar profissão' });
    }
};

const deleteOne = async(req, res) => {
    try {
        const profissoes = await profissaoRepository.delete(req.params.id);
        res.json(profissoes);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao deletar profissão' });
    }
};

const update = async(req, res) => {
    try {
        const { id } = req.params;
        const fields = req.body;
        const profissoes = await profissaoRepository(id, fields);
        res.json(profissoes);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar dados da profissão' });
    }
};

const insert = async(req, res) => {
    try {
        const insertedProfissao = await profissaoRepository.create(req.body);
        res.json(insertedProfissao);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar profissão' });
    }
};


module.exports = {
    get,
    getOne,
    deleteOne,
    update,
    insert
};