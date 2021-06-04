const express = require('express');
const router = express.Router();
const profissaoController = require('../controller/Profissao');
const authMiddleware = require('../Middleware/auth');

router.use(authMiddleware);

router.get('/', async(req, res) => {
    try {
        const profissoes = await profissaoController.getProfissoes();
        res.json(profissoes);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar profissões' });
    }
});

router.get('/:id', async(req, res) => {
    try {
        const profissoes = await profissaoController.getProfissao(req.params.id);
        res.json(profissoes);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar profissão' });
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const profissoes = await profissaoController.deleteProfissao(req.params.id);
        res.json(profissoes);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao deletar profissão' });
    }
});

router.put('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const fields = req.body;
        const profissoes = await profissaoController.updateProfissao(id, fields);
        res.json(profissoes);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar dados da profissão' });
    }
});

router.post('/', async(req, res) => {
    try {
        const insertedProfissao = await profissaoController.insertProfissao(req.body);
        res.json(insertedProfissao);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar profissão' });
    }
});

module.exports = router;