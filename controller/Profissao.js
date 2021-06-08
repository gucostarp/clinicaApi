const profissaoRepository = require('../services/Profissao')

const get = async(req, res) => {
    try {
        const profissoes = await profissaoRepository.getProfissoes(req.body);
        res.json(profissoes);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar profissões' });
    }
};

const getOne = async(req, res) => {
    try {
        const profissoes = await profissaoRepository.getProfissao(req.params.id);
        res.json(profissoes);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar profissão' });
    }
};

const deleteOne = async(req, res) => {
    try {
        const profissoes = await profissaoRepository.deleteProfissao(req.params.id);
        res.json(profissoes);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao deletar profissão' });
    }
};

const update = async(req, res) => {
    try {
        const { id } = req.params;
        const fields = req.body;
        const profissoes = await profissaoRepository.updateProfissao(id, fields);
        res.json(profissoes);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar dados da profissão' });
    }
};

const insert = async(req, res) => {
    try {
        const insertedProfissao = await profissaoRepository.insertProfissao(req.body);
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