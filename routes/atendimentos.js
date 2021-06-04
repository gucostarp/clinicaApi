const express = require('express');
const router = express.Router();
const userController = require('../controller/Atendimento');
const authMiddleware = require('../Middleware/auth');

router.use(authMiddleware);

router.get('/', async(req, res) => {
    try {
        const atendimentos = await userController.getAtendimentos();
        res.json(atendimentos);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar atendimentos' });
    }
});

router.get('/:id', async(req, res) => {
    try {
        const atendimentos = await userController.getAtendimento(req.params.id);
        res.json(atendimentos);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar atendimento' });
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const atendimentos = await userController.deleteAtendimento(req.params.id);
        res.json(atendimentos);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao deletar atendimento' });
    }
});

router.put('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const fields = req.body;
        const atendimentos = await userController.updateAtendimento(id, fields);
        res.json(atendimentos);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar dados do atendimento' });
    }
});

router.post('/', async(req, res) => {
    try {
        const insertedAtendimento = await userController.insertAtendimento(req.body);
        res.json(insertedAtendimento);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar atendimento' });
    }
});

module.exports = router;