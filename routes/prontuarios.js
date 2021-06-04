const express = require('express');

const router = express.Router();

const prontuarioController = require('../controller/Prontuario');
const authMiddleware = require('../Middleware/auth');

router.use(authMiddleware);

router.get('/', async(req, res) => {
    try {
        const prontuarios = await prontuarioController.getProntuarios();
        res.json(prontuarios);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar prontuarios' });
    }
});

router.get('/:id', async(req, res) => {
    try {
        const prontuarios = await prontuarioController.getProntuario(req.params.id);
        res.json(prontuarios);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar prontuario' });
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const prontuarios = await prontuarioController.deleteProntuario(req.params.id);
        res.json(prontuarios);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao deletar prontuario' });
    }
});

router.put('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const fields = req.body;
        const prontuarios = await prontuarioController.updateProntuario(id, fields);
        res.json(prontuarios);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar dados do prontuario' });
    }
});

router.post('/', async(req, res) => {
    try {
        const insertedProntuario = await prontuarioController.insertProntuario(req.body);
        res.json(insertedProntuario);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar prontuario' });
    }
});

module.exports = router;